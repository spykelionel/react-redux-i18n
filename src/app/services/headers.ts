import { RootState } from "../types";

export const preparedHeaders = (headers: any, { getState }: any) => {
  const { token } = (getState() as RootState).auth;
  if (token) {
    headers.set("authorization", `Bearer ${token}`);
    return headers;
  }
};
