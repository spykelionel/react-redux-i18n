import { preparedHeaders } from "@/app/services/headers";
import { BASE_URL } from "@/lib/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const utilApi = createApi({
  reducerPath: "utilApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: preparedHeaders,
  }),
  endpoints: (builder) => ({
    fetchCourses: builder.query({
      query: (query?: string) => ({ url: `courses?query=${query}` }),
    }),
    fetchLanguages: builder.query({
      query: () => ({ url: `languages` }),
    }),
    fetchTimezones: builder.query({
      query: () => ({ url: `timezones` }),
    }),
  }),
});

export const {
  useFetchCoursesQuery,
  useFetchLanguagesQuery,
  useFetchTimezonesQuery,
} = utilApi;
