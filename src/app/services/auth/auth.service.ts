import { BASE_URL } from "@/lib/config";
import { LocalStorage, SESSION_EXPIRE_TIME } from "@/lib/util";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { v4 as uuidv4 } from "uuid";
import { preparedHeaders } from "../headers";

// Initial state
const initialState: IAuthUser = {
  token: LocalStorage.load(`abocollab-user-auth-token`),
  user: LocalStorage.load("abocollab-user-info"),
  sessionId: LocalStorage.load("abocollab-user-session-id"),
  sessionExpireAt: LocalStorage.load("abocollab-user-session-expire-at"),
};

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: preparedHeaders,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: ILogin) => ({ url: `login`, method: "POST", body }),
    }),
    register: builder.mutation({
      query: (body: IRegister) => ({ url: `register`, method: "POST", body }),
    }),
  }),
});

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, { payload }: PayloadAction<any>) => {
      try {
        const sessionId = uuidv4();
        const sessionExpiry = Date.now() + SESSION_EXPIRE_TIME;

        const token = payload.token as unknown as string;
        const user = payload.user;
        state.token = token;
        state.user = user;
        state.sessionId = sessionId;
        state.sessionExpireAt = sessionExpiry;
        LocalStorage.save("abocollab-user-auth-token", token);
        LocalStorage.save("abocollab-user-info", user);
        LocalStorage.save("abocollab-user-session-id", sessionId);
        LocalStorage.save("abocollab-user-session-expire-at", sessionExpiry);
      } catch (error) {
        console.error("Error saving abocollab session", error);
      }
    },
    logOutUser: (state) => {
      try {
        state.token = null;
        state.user = null;
        state.sessionId = null;
        state.sessionExpireAt = null;
        LocalStorage.remove("abocollab-user-auth-token");
        LocalStorage.remove("abocollab-user-info");
        LocalStorage.remove("abocollab-user-session-id");
        LocalStorage.remove("abocollab-user-session-expire-at");
        LocalStorage.remove("abocollab-sessionId");
        LocalStorage.remove("abocollab-sessionExpiry");
      } catch (error) {
        console.error("Error removing abocollab session", error);
      }
    },
  },
});

export const { useLoginMutation, useRegisterMutation } = authApi;

export const { saveUser, logOutUser } = authSlice.actions;

export const authReducer = authSlice.reducer;

export { authApi };

