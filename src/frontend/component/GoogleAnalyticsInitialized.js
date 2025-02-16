"use client";
import { useEffect } from "react";
import { initializeGA } from "../google-analytics";

export default function GoogleAnalyticsInitialized() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGA();
      window.GA_INITIALIZED = true;
    }
  }, []);
}
