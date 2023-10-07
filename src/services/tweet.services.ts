import rwClient from "@/utils/twitter-api";
import path, { join } from "path";
import { readFile, unlink, writeFile } from "fs/promises";
import sharp from "sharp";

const threadMaker = (text: string, imageId?: string) => {
  let thread = [];
  let numOfTweet = Math.round(text.length / 265);
  let position = 0;
  for (let i = position; i <= numOfTweet; i++) {
    if (i < numOfTweet) {
      thread.push(text.substr(position, 265) + "(cont..)");
    } else {
      thread.push(text.substr(position, 265));
    }
    position += 265;
  }
  if (imageId) {
    let first = thread[0];
    const newObj = { text: first, media: { media_ids: [imageId] } };
    thread[0] = newObj;
    console.log(thread);
  }
  return thread;
};

export async function postTweet(text: string) {
  try {
    let response, link;

    if (text.length < 265) {
      response = await rwClient.v2.tweet(text);
      link = "https://twitter.com/CjrFess/status/" + response.data.id;
    } else {
      const thread = threadMaker(text);
      response = await rwClient.v2.tweetThread(thread);
      link = "https://twitter.com/CjrFess/status/" + response[0].data.id;
    }

    const result = {
      link,
      success: true,
    };

    return result;
  } catch (error) {
    throw error;
  }
}

export async function handleImage(file: File) {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const production = process.env.NEXT_PUBLIC_PRODUCTION as string
    let path: string

    if(production === "true"){
      path = join(process.cwd(), file.name);
    } else{
      path = join("./public", "tmp", file.name);
    }
    // const watermark = await sharp(buffer)
    //   .composite([
    //     { input: await readFile("public/wm.png"), top: 50, left: 50 },
    //   ])
    //   .png({ quality: 80 })
    //   .toBuffer();
    await writeFile(path, buffer);

    const ImgTwitterId = await rwClient.v1.uploadMedia(path);
    const response = { path: path, mediaId: ImgTwitterId };

    return response;
  } catch (error) {
    throw error;
  }
}

export async function postWithImage(image: File, tweet: string) {
  try {
    const response = await handleImage(image);
    const mediaIds = response.mediaId;
    let postResponse, link;
    if (tweet.length < 265) {
      postResponse = await rwClient.v2.tweet({
        text: tweet,
        media: { media_ids: [mediaIds] },
      });
      link = "https://twitter.com/CjrFess/status/" + postResponse.data.id;
    } else {
      postResponse = await rwClient.v2.tweetThread(
        threadMaker(tweet, mediaIds)
      );
      link = "https://twitter.com/CjrFess/status/" + postResponse[0].data.id;
    }

    const result = { postResponse, link };

    await unlink(response.path);
    return result;
  } catch (error) {
    throw error;
  }
}
