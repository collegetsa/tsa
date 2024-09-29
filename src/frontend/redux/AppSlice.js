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
      course: "",
      interest: "",
    },
    confirmForm: {
      isForm: false,
      deleteId: "",
    },
    isPreview: false,
    courseField: "",
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    setIsPreview: (state, action) => {
      state.isPreview = action.payload;
    },
    setCourseField: (state, action) => {
      state.courseField = action.payload;
    },
    setConfirmForm: (state, action) => {
      state.confirmForm = action.payload;
    },
  },
});

export const {
  setAuth,
  setForm,
  setIsPreview,
  setCourseField,
  setConfirmForm,
} = AppSlice.actions;
export default AppSlice.reducer;
