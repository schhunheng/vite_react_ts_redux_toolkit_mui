import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { todosApi } from "./todo";
import { contactApi } from "./contact/intext";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware, contactApi.middleware),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
