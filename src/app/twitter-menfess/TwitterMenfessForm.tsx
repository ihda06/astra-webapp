"use client";

import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import React, { ChangeEvent, useRef, useState, MouseEvent } from "react";
import Breakline from "@/commons/components/Breakline";

import axios from "axios";
import Response from "./Response";
import Swal from "sweetalert2";
import Button from "@/commons/components/Button";
import useIsMobile from "@/hooks/useIsMobile";

export default function TwitterMenfessForm({}) {
  const isMobile = useIsMobile();
  const [image, setImages] = useState<File | null>(null);
  const [isError, setIsError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<string>("");
  const [tweet, setTweet] = useState<string>("");
  const textInput = useRef<HTMLDivElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleClickArea = () => {
    textInput.current?.focus();
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleImage = () => {
    imageInput.current?.click();
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      setImages(e.target.files[0]); //error
    }
  };
  const handleDelete = () => {
    setImages(null);
  };

  const handleChangeTweet = (e: ChangeEvent<HTMLDivElement>) => {
    setTweet(e.target.innerText);
  };

  const handlePostTweet = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    if (tweet.search(/Cjr!/) >= 0) {
      const formData = new FormData();
      if (image) {
        formData.append("image", image as File);
      }
      formData.append("tweet", tweet);
      const res = await axios.post("/api/twitterClient", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const id = res.data.response.link;

      if (id) {
        Swal.fire({
          toast: true,
          title: "Tweet Kamu Terkirim",
          icon: "success",
        });
        setIsSuccess(id);
      } else {
        Swal.fire({
          toast: true,
          title: "Eror",
          icon: "error",
          timer: 2000,
          timerProgressBar: true,
        });
        setIsError(res.data.response);
      }
    } else {
      Swal.fire({
        toast: true,
        title: "Tidak Mengandung trigger",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
      });
      setIsError("Tidak mengandung trigger");
    }
    textInput.current!.innerHTML = "";
    setTweet("");
    setImages(null);
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex lg:justify-start justify-center rounded-lg shadow-md bg-white p-5">
        <div className="inline-block lg:hidden">
          <Image
            src="/logo-twitter.png"
            width={100}
            height={100}
            alt="s"
            className=" w-16 h-auto object-contain rounded-full border"
            priority
          ></Image>
        </div>

        <div className="flex flex-col gap-1 w-full md:pl-5 ">
          <div className="flex items-center">
            <div className="lg:inline-block hidden">
              <Image
                src="/logo-twitter.png"
                width={50}
                height={50}
                alt="s"
                className=" w-10 h-auto object-contain rounded-full border"
                priority
              ></Image>
            </div>

            <h1 className="pl-2 pb-2 text-xs font-extrabold text-sky-400">
              Mangga mau ngetweet apa?
            </h1>
          </div>
          <div
            className={
              "flex flex-col justify-between p-5 rounded-lg w-full border-2 duration-300 text-neutral-600 " +
              (isFocus ? " border-sky-400" : "")
            }
          >
            <div
              className=" cursor-pointer lg:min-h-[128px] min-h-[80px] mb-3 "
              onClick={handleClickArea}
            >
              <div
                className="overflow-y-hidden break-words text-sm focus:outline-none cursor-text"
                contentEditable="true"
                ref={textInput}
                onInput={handleChangeTweet}
                onFocus={handleFocus}
                onBlur={handleBlur}
              ></div>
            </div>
            <div className="">
              <Breakline className="pb-3"></Breakline>
              <div className="px-2 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <BsImage
                    className="text-sky-400 text-lg cursor-pointer"
                    onClick={handleImage}
                  ></BsImage>
                  <input
                    hidden
                    type="file"
                    accept="image/png, image/jpeg"
                    ref={imageInput}
                    onChange={handleChangeImage}
                  ></input>
                  {image ? (
                    <div className="flex gap-0.5 items-center w-20 lg:w-auto">
                      <h3 className="lg:text-xs text-[10px] truncate text-neutral-500">
                        {image.name}
                      </h3>

                      <AiOutlineCloseCircle
                        className="text-lg text-red-600 cursor-pointer"
                        onClick={() => {
                          handleDelete();
                        }}
                      ></AiOutlineCloseCircle>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {!isLoading ? (
                  <Button
                    className=" hover:text-white hover:bg-sky-400 font-extrabold text-sky-400 border-sky-400 text-xs"
                    onClick={handlePostTweet}
                  >
                    Tweet
                  </Button>
                ) : (
                  <Button className="font-extrabold text-neutral-400 border-neutral-400 text-xs">
                    ⌛
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Response success={isSuccess} />
    </>
  );
}
