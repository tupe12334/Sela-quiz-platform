import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { stringifyUrl } from "query-string";
export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_URL }),
  endpoints: (builder) => ({
    getJwt: builder.query({
      query: ({ user, password }) => {
        const url = stringifyUrl({
          url: `auth/try`,
          query: { user: user, password: password },
        });
        return url;
      },
    }),
  }),
});
// Export hooks for usage in functional components, which are// auto-generated based on the defined endpoints
export const { useGetJwtQuery, useLazyGetJwtQuery } = serverApi;
