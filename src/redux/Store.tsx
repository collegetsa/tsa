"use client";
import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./FormSlice";

export const Store = configureStore({
  reducer: {
    form: FormReducer,
  },
});
