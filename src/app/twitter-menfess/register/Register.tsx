"use client";

import Container from "@/commons/components/Container";
import Textfield from "@/commons/components/Textfield";
import Airtables from "@/utils/Airtable";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import { FormEvent, useState } from "react";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const route = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await Airtables("CjrFessV2User")
        .select({
          filterByFormula: `{username_twitter} = "${userName}"`,
        })
        .all();
      if (response.length > 0) {
        Swal.fire({
          toast: true,
          title: "Akun sudah terdaftar",
          text: "Silahkan gunakan username lain",
          icon: "error",
          timer: 2000,
          timerProgressBar: true,
        });
        return;
      } else {
        await Airtables("CjrFessV2User").create([
          {
            fields: {
              username_twitter: userName,
              password: password,
            },
          },
        ]);
        Swal.fire({
          toast: true,
          title: "Daftar akun sukses",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
        });
        setCookie("twitterUsn", userName, { maxAge: 60 * 60 * 24 * 7 });
        route.push("/twitter-menfess");
      }
    } catch (error) {
      Swal.fire({
        toast: true,
        title: "Daftar akun gagal",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container>
      <div className="w-full p-6 bg-white space-y-6 rounded-lg shadow">
        <div className="border-b-2 pb-3">
          <h1 className="text-3xl font-bold">Daftar Akun</h1>
          <p className="text-sm text-neutral-400">
            Daftar akun twitter untuk akses menfess
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleOnSubmit}>
          <Textfield
            label={"Username Twitter"}
            placeholder="Username twitter"
            onChange={(e) => setUserName(e.currentTarget.value)}
          />
          <Textfield
            label={"Password"}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button
            className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded disabled:pointer-events-none disabled:bg-gray-300 disabled:cursor-progress"
            type="submit"
            disabled={isLoading}
          >
            Daftar
          </button>
        </form>
      </div>
    </Container>
  );
}
