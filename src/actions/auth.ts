"use server";

import Airtables from "@/utils/Airtable";
import { cookies } from "next/headers";

export async function Auth(userName: string, password: string) {
  const res = await Airtables("CjrFessV2User")
    .select({
      filterByFormula: `{username_twitter} = "${userName}"`,
    })
    .all();
  if (res.length > 0) {
    if (res[0].fields.password === password) {
      cookies().set("twitterUsn", userName);
      cookies().set("twitterId", res[0].id);
      return true;
    }
  }

  return false;
}

export async function getStatus() {
  const usn = cookies().get("twitterUsn")?.value;
  const res = await Airtables("CjrFessV2User")
    .select({
      filterByFormula: `{username_twitter} = "${usn}"`,
    })
    .all();
  return res[0].get("status")?.toString() === "true";
}
