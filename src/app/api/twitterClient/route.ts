import { postTweet, postWithImage } from "@/services/tweet.services";
import { writeFile } from "fs/promises";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

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
export async function GET() {
  try {
    const twitterLink = await rwClient.generateAuthLink(
      "http://localhost:3000/twitter-menfess",
      { linkMode: "authorize" }
    );

    //     console.log(twitterLink);

    return Response.json({ twitterLink });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error });
  }
}

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
      return Response.json({response});
    }
  } catch (error) {
    console.log(error);

    return Response.json({error, errorMsg: "Error"});
  }
}
