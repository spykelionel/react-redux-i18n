import { RootState } from "@/app/types";
import { useAppSelector } from "./useStore";

export function useAuth() {
  return useAppSelector((state: RootState) => state.auth as IAuthUser);
}
