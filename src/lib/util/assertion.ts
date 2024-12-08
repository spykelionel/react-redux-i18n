import { AppStorageKey } from "@/types";
import { TypeAssertionError } from "./error";

export const assertStorageKeyType = (
  key: AppStorageKey,
  value: IUser | string | number
): void => {
  switch (key) {
    case "abocollab-sessionExpiry":
    case "abocollab-user-session-expire-at":
      if (typeof value !== "number") {
        throw TypeAssertionError.from(value, "number");
      }
      break;
    case "abocollab-sessionId":
    case "abocollab-user-auth-token":
    case "abocollab-user-session-id":
      if (typeof value !== "string") {
        throw TypeAssertionError.from(value, "string");
      }
      break;
    case "abocollab-user-info":
      if (typeof value !== "object") {
        throw TypeAssertionError.from(value, "IUser");
      }
  }
};
