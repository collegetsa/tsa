"use client";
import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: "form",
  initialState: {
    value: false,
  },
  reducers: {
    isForm: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { isForm } = FormSlice.actions;
export default FormSlice.reducer;
