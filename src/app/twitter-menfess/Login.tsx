"use client";

import Button from "@/commons/components/Button";
import { useTwitter } from "@/context/twitter-login";
import Airtables from "@/utils/Airtable";
import axios from "axios";
import { useSearchParams } from "next/navigation";

import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

export default function Login({}) {
  // const searchParams = useSearchParams();
  const login = useTwitter((state) => state.setTelegramAccount);

  const twitterStatus = useTwitter((state) => state.telegramAccount);
  const [usnTele, setUsnTele] = useState<string>("");
  const [isError, setIsError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != null) {
      setUsnTele(e.target.value); //error
    }
  };

  // const handleParams = () => {
  //   const oauth_token = searchParams.get("oauth_token") as string;
  //   const oauth_verifier = searchParams.get("oauth_verifier") as string;
  //   localStorage.setItem("oauthToken", oauth_token);
  //   localStorage.setItem("oauth_verifier", oauth_verifier);
  // };

  // const generateLink = async () => {
  //   let res = await axios.get("/api/twitterClient");

  //   localStorage.setItem(
  //     "oauth_callback_confirmed",
  //     res.data.twitterLink?.oauth_callback_confirmed
  //   );
  //   localStorage.setItem("oauth_token", res.data.twitterLink?.oauth_token);
  //   localStorage.setItem(
  //     "oauth_token_secret",
  //     res.data.twitterLink?.oauth_token_secret
  //   );
  //   return res.data.twitterLink?.url;
  // };

  const AuthTele = async () => {
    const res = await Airtables("databaseTwitter")
      .select({ filterByFormula: `username_tele = "${usnTele}"` })
      .all();
    if (res.length > 0) {
      if (res[0].fields.verified) {
        localStorage.setItem("teleUsn", usnTele as string);

        login(usnTele);


        // setUsnTele(usnTele)
        return true;
      } else {
        setIsError("Data belum diverifikasi");
        return false;
      }
    } else {
      setIsError("Akun belum didaftarkan");
      return false;
    }
  };

  const handleClickLogin = async (e: MouseEvent<HTMLDivElement>) => {
    try {
      setIsLoading(true);
      await AuthTele();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   if (searchParams.get("oauth_token")) {
  //     handleParams();
  //   }
  // }, []);

  return (
    <div className="h-full flex justify-center items-center py-20 lg:p-0 ">
      <div className="p-5 flex flex-col items-center gap-3 text-center border rounded-xl">
        {isLoading ? (
          <div className="text-center">
            Loading <span>⌛</span>
          </div>
        ) : (
          <>
            <h1>Login</h1>
            <h4 className=" text-red-600 text-xs font-semibold">{isError}</h4>
            {twitterStatus}
            <input
              type="text"
              className={
                "border p-3 rounded-full text-xs w-80 " +
                (isError
                  ? "border-red-600 placeholder-red-600 focus:outline-red-600"
                  : "")
              }
              placeholder="Silahkan tulis username telegram kamu"
              onChange={handleChange}
            ></input>
            <Button
              className="hover:text-white border-blue-900 hover:bg-blue-800 w-32 font-bold text-blue-900 shadow-md"
              onClick={handleClickLogin}
            >
              Login
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
