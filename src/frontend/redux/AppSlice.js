"use client";
import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "app",
  initialState: {
    auth: null,
    form: {
      isForm: false,
      title: "",
      type: "",
      logo: "",
    },
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { setAuth, setForm } = AppSlice.actions;
export default AppSlice.reducer;
