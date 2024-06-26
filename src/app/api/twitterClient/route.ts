import { postTweet, postWithImage } from "@/services/tweet.services";
import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";

import { TwitterApi } from "twitter-api-v2";

const appKey = process.env.NEXT_PUBLIC_TWITTER_APP_KEY as string;
const appSecret = process.env.NEXT_PUBLIC_TWITTER_APP_SECRET as string;
const accessToken = process.env.NEXT_PUBLIC_TWITTER_ACCESS_TOKEN as string;
const accessSecret = process.env.NEXT_PUBLIC_TWITTER_ACCESS_SECRET as string;

const userClient = new TwitterApi({
  appKey: appKey,
  appSecret: appSecret,
  // Following access tokens are not required if you are
  // at part 1 of user-auth process (ask for a request token)
  // or if you want a app-only client (see below)
  accessToken: accessToken,
  accessSecret: accessSecret,
});

const rwClient = userClient.readWrite;

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.formData();
    const file: File | null = formData.get("image") as unknown as File;
    const text: string = formData.get("tweet") as string;

    if (file === null) {
      const response = await postTweet(text);
      return Response.json({ response });
    } else {
      const response = await postWithImage(file, text);
      return Response.json({ response });
    }
  } catch (error) {
    return Response.json({ error, errorMsg: "Error" });
  }
}
