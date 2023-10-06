import { NextApiRequest, NextApiResponse } from "next";
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
const workWithTheTwitterClient =  async(req: NextApiRequest, res: NextApiResponse) => {
    // here you receive data from your client for example:
   const body = req.body.message || "default tweet message" // or maybe, if not message, do not send anything at all
   await rwClient.v2.tweet(body.message);

   return res.status(200).json({ok: 'ok'})
}

export default workWithTheTwitterClient;
