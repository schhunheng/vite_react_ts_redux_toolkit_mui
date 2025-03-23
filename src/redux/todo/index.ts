import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export const todosApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<TodoType[], string>({
      query: () => "/todos",
    }),
  }),
});
export const { useGetTodosQuery } = todosApi;
