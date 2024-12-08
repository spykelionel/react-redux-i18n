import { RouteObject } from "react-router-dom";

export type CustomRouteObject = RouteObject & {
  children?: CustomRouteObject[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type MessageCardProps = {
  message?: string;
  action?: () => void;
};

export type AppStorageKey =
  | "abocollab-user-auth-token"
  | "abocollab-user-info"
  | "abocollab-user-session-id"
  | "abocollab-user-session-expire-at"
  | "abocollab-sessionId"
  | "abocollab-sessionExpiry";

export type StorageItem = {
  value: IUser | string | number;
  expiry: number;
};

export type Language = {
  name: string;
  id: number;
};
