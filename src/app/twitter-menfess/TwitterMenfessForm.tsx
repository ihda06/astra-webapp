"use client";

import Container from "@/commons/components/Container";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import React, { ChangeEvent, useRef, useState, MouseEvent } from "react";
import Breakline from "@/commons/components/Breakline";

import axios from "axios";
import Response from "./Response";
import Swal from "sweetalert2";

export default function TwitterMenfessForm({}) {
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
  const handleDelete = (e: ChangeEvent<HTMLInputElement>) => {
    setImages(null);
  };

  const handleChangeTweet = (e: ChangeEvent<HTMLDivElement>) => {
    setTweet(e.target.innerText);
  };

  const handlePostTweet = async (e: React.MouseEvent<HTMLDivElement>|React.TouchEvent<HTMLElement>) => {
    setIsLoading(true)
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
      setIsLoading(false)
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
  };

  return (
    <>
      <div className="flex lg:justify-start justify-center">
        <div className="inline-block">
          <Image
            src="/logo-twitter.png"
            width={100}
            height={100}
            alt="s"
            className=" w-16 h-auto object-contain rounded-full border"
          ></Image>
        </div>
        <div className="inline-block lg:w-[800px] w-[300px] pl-5 ">
          <h1 className="pl-2 pb-2 text-sm font-extrabold text-sky-400">
            Mangga mau ngetweet apa?
          </h1>
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
                        onClick={handleDelete}
                      ></AiOutlineCloseCircle>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className=" cursor-pointer pt-1.5 pb-1 px-3 border rounded-full hover:text-white hover:bg-sky-400 duration-300 font-extrabold text-sky-400 border-sky-400 text-xs"
                  onClick={handlePostTweet} onTouchEnd={handlePostTweet}
                >
                  {isLoading ? "Processing ⌛" :  "Tweet"}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSuccess && <Response success={isSuccess} />}
    </>
  );
}
