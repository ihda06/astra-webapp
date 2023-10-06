"use client";

import { useTwitter } from "@/context/twitter-login";
import Login from "./Login";
import { useEffect} from "react";

import TwitterMenfess from "./TwitterMenfess";

export default function Page({}) {
  const login = useTwitter((state) => state.setTelegramAccount);
  const loginInfo = useTwitter((state) => state.telegramAccount);

  useEffect(() => {
    if (localStorage.getItem("teleUsn"))
      login(localStorage.getItem("teleUsn") as string);
  }, []);

  if (!loginInfo) {
    return <Login></Login>;
  } else {
    return <TwitterMenfess />;
  }
}
