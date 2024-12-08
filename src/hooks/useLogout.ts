import { logOutUser } from "@/app/services/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const invokeLogout = () => {
    dispatch(logOutUser());
    navigate("/", { replace: true });
  };
  return { invokeLogout };
}
