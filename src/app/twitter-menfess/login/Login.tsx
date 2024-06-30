"use client";

import Button from "@/commons/components/Button";

import { useState } from "react";
import Introduction from "../Introduction";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Textfield from "@/commons/components/Textfield";
import { Auth } from "@/actions/auth";
import Swal from "sweetalert2";

export default function Login({}) {
  const router = useRouter();

  const [usnTwitter, setUsnTwitter] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const AuthTele = async () => {
    const res = await Auth(usnTwitter, password);
    if (!res) {
      setIsError("Username / Password Salah");
    } else {
      setIsError("");
      Swal.fire({
        toast: true,
        title: "Login Berhasil",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
      });
      router.refresh();
    }
  };

  const handleClickLogin = async () => {
    if (!usnTwitter) {
      setIsError("Mohon isi username");
    } else {
      setIsLoading(true);
      await AuthTele();
      setIsLoading(false);
      router.push("/twitter-menfess");
    }
  };

  return (
    <div className="flex lg:h-full">
      <div className="flex bg-white flex-col lg:flex-row lg:my-36 w-full rounded-xl shadow-xl items-center p-7 gap-5">
        <div className="lg:basis-4/5 pr-6">
          <Introduction />
        </div>
        <div className="lg:h-full lg:border-l-2 border-t-2 w-full lg:w-0"></div>
        <div className="lg:basis-2/5 w-full">
          <div className="flex flex-col gap-2 ">
            {isLoading ? (
              <button className="text-center text-neutral-500" disabled>
                Loading <span>⌛</span>
              </button>
            ) : (
              <div className="flex flex-col gap-5 ">
                <div className="">
                  <h1 className="text-xl text-neutral-800 font-semibold">
                    Login
                  </h1>
                  {isError ? (
                    <h4 className=" text-red-600 text-xs font-semibold">
                      {isError}
                    </h4>
                  ) : (
                    <p className="text-xs text-neutral-400">
                      Login untuk mengakses fitur
                    </p>
                  )}
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleClickLogin();
                  }}
                  className="flex flex-col justify-between gap-3 w-full"
                >
                  <Textfield
                    label="Username"
                    placeholder="Username"
                    onChange={(e) => setUsnTwitter(e.currentTarget.value)}
                  />
                  <Textfield
                    label="Password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    type="password"
                  />
                  <Button
                    className="hover:text-white text-xs border-blue-300 hover:bg-indigo-300 font-bold text-blue-900 shadow-md"
                    type="submit"
                  >
                    Login
                  </Button>
                </form>
                <div className="">
                  <span className="text-xs inline-block">
                    Belum punya akun?&nbsp;
                  </span>
                  <Link
                    href={"/twitter-menfess/register"}
                    className="text-xs text-blue-400 underline"
                  >
                    Buat Akun
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Introduction /> */}
    </div>
  );
}
