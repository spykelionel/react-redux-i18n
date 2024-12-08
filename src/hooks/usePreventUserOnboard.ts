import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./useAuth";

export function usePreventUserOnboard(role: UserRole) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const userHasRole = (() => user?.roles.includes(role))();
  useEffect(() => {
    if (userHasRole) {
      toast.info(`You are already a ${role}!`);
      navigate(`/${role}/dashboard`, { replace: true });
      return;
    }
  }, [user]);
}
