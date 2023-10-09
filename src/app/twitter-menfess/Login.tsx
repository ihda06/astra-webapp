"use client";

import Button from "@/commons/components/Button";
import { useTwitter } from "@/context/twitter-login";
import Airtables from "@/utils/Airtable";

import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import Introduction from "./Introduction";
import Container from "@/commons/components/Container";
import Card from "@/commons/components/Card";

export default function Login({}) {
  // const searchParams = useSearchParams();
  const login = useTwitter((state) => state.setTelegramAccount);

  const twitterStatus = useTwitter((state) => state.telegramAccount);
  const [usnTele, setUsnTele] = useState<string>("");
  const [isError, setIsError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value != null) {
      setUsnTele(e.target.value);
    }
  };

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
      setIsError("Akun belum didaftarkan, silahkan gunakan bot telegram");
      return false;
    }
  };

  const handleClickLogin = async (e: MouseEvent<HTMLDivElement>) => {
    try {
      if (!usnTele) {
        setIsError("Mohon isi username");
      } else {
        setIsLoading(true);
        await AuthTele();
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="h-full">
      <div className="flex h-full">
        <div className="flex bg-white flex-col lg:flex-row lg:my-36 w-full rounded-xl shadow-xl items-center p-7 gap-5">
          <div className="lg:basis-4/5 pr-6">
            <Introduction />
          </div>
          <div className="lg:h-full lg:border-l-2 border-t-2 w-full lg:w-0"></div>
          <div className="lg:basis-2/5 w-full">
            <div className="flex flex-col gap-2 text-center ">
              {isLoading ? (
                <div className="text-center text-neutral-500">
                  Loading <span>⌛</span>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-5 ">
                    {isError ? (
                      <h4 className=" text-red-600 text-xs font-semibold">
                        {isError}
                      </h4>
                    ) : (
                      <h4 className=" text-neutral-800 text-xs font-semibold">
                        Silahkan login dulu
                      </h4>
                    )}
                    {twitterStatus}

                    <input
                      type="text"
                      className={
                        "border p-1.5 px-3 rounded-full text-xs  placeholder:text-neutral-500 text-neutral-900" +
                        (isError
                          ? "border-red-600 placeholder-red-600 focus:outline-red-600"
                          : "")
                      }
                      placeholder="Silahkan tulis username telegram kamu"
                      onChange={handleChange}
                    ></input>
                    <Button
                      className="hover:text-white text-xs border-blue-300 hover:bg-indigo-300 font-bold text-blue-900 shadow-md"
                      onClick={handleClickLogin}
                    >
                      Login
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* <Introduction /> */}
      </div>
    </Container>
  );
}
