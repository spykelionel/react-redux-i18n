import { useAuth, usePreviousLocation } from "@/hooks";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
}

export const RoleGuard: React.FC<RoleGuardProps> = ({
  children,
  allowedRoles,
}) => {
  const navigate = useNavigate();
  const previousRoute = usePreviousLocation();
  const { user: authUser } = useAuth();

  useEffect(() => {
    const user = authUser!;
    if (!user.current_role) {
      // user must be a guest.
      navigate(`/onboard`, { replace: true });
      return;
    }
    if (!user.roles.some((role) => allowedRoles.includes(role))) {
      const route = previousRoute ?? `/${user.roles[0]}/dashboard`;
      navigate(route, { replace: true });
      return;
    }
  }, [authUser, navigate, previousRoute]);

  return <>{children}</>;
};
