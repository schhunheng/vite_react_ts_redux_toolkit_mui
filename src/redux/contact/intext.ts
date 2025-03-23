import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactResponseType } from "./type";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  endpoints: (builder) => ({
    getContact: builder.query<ContactResponseType, string>({
      query: () => ({
        url: "/contacts",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetContactQuery } = contactApi;
