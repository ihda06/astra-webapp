"use client";

import Card from "@/commons/components/Card";
import Airtables from "@/utils/Airtable";
import { FieldSet, Records } from "airtable";
import { getCookie } from "cookies-next";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Response({
  success,
  refetch,
}: {
  success?: string;
  refetch: boolean;
}) {
  const userId = getCookie("twitterUsn");

  const [historyTweet, setHistoryTweet] = useState<Records<FieldSet>>([]);

  useEffect(() => {
    (async () => {
      const historyTweet = await Airtables("CjrFessTweet")
        .select({
          filterByFormula: `{Username Twitter (from user)} = "${userId}"`,
        })
        .all();
      setHistoryTweet(historyTweet);
    })();
  }, [userId, refetch]);
  return (
    <Card className="text-center w-full space-y-3 divide-y-2">
      <div>
        <h1 className={"text-sm font-bold text-sky-400"}>Link Tweet ✅</h1>
        {success && (
          <p className="text-xs text-neutral-400 dark:text-neutral-300">
            Simpan link ini baik baik ⚠️
          </p>
        )}
      </div>
      <div className="shadow p-5 rounded-full text-xs break-words">
        {success ? (
          <Link href={`${success}`} className={" underline text-sky-500"}>
            {success}
          </Link>
        ) : (
          <h1 className="text-neutral-400">Kamu belum mengirim menfess</h1>
        )}
      </div>
      <div className="pt-5">
        <h1 className="text-start text-xl font-bold">History</h1>
        <p className="text-start text-xs text-neutral-400">
          Riwayat menfess yang kamu kirim
        </p>
        <table className="w-full">
          <thead>
            <tr>
              <th className=" border-b py-3">Tweet</th>
              <th className=" border-b py-3">Pada</th>
            </tr>
          </thead>

          <tbody>
            {historyTweet.length > 0 ? (
              historyTweet.map((tweet) => (
                <tr key={tweet.id}>
                  <td>
                    <Link
                      href={tweet.get("link")?.toString() ?? "---"}
                      className="underline text-sky-500"
                    >
                      {tweet.get("tweet")?.toString() ?? "---"}
                    </Link>
                  </td>
                  <td>{tweet.get("created_at")?.toString() ?? "---"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2}>Kamu belum mengirim menfess</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
