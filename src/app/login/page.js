"use client"
import AuthPage from "@/frontend/section/AuthPage";
import { redirect} from "next/navigation";
import { useSelector } from "react-redux";

export default function Page() {
  const auth = useSelector((state) => state.app.auth);
  if (auth) {
    redirect("/")
  }
  return <AuthPage authType="login" />;
}