import { logOutUser } from "@/app/services/auth";
import { useAuth } from "@/hooks";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthGuard: React.FC<any> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { token, sessionId, sessionExpireAt } = useAuth();

  const isUserSessionValid = (): boolean => {
    if (!sessionExpireAt || !sessionId) return false; // no session present
    if (Date.now() > sessionExpireAt) {
      logOutUser();
      return false;
    }
    if (!token) {
      return false;
    }
    return true;
  };

  // eslint-ignore
  /**
   * Validate authorization token.
   * @param token Authorization token
   * @param sessionExpireAt Session Expiration date
   * @returns true if valid. false otherwise
   * @warning Incomplete. Don't use this
   * @author spykelionel
   */
  const validateUserSession = (
    token: string,
    sessionExpireAt: number
  ): boolean => {
    if (Date.now() > sessionExpireAt) {
      logOutUser();
      return false;
    }
    // send http request to validate this token..
    return true;
  };

  useEffect(() => {
    if (!isUserSessionValid()) {
      const timestamp = Date.now();
      const loginUrl = `/login?return=${pathname}&timestamp=${timestamp}&sessionId=${sessionId}`;
      navigate(loginUrl);
    }
  }, [token, pathname, sessionExpireAt, navigate]);

  return <>{children}</>;
};

export default AuthGuard;
