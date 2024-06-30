"use client";

import TwitterMenfessForm from "./TwitterMenfessForm";

import Rules from "./Rules";
import Verify from "./Verify";
import { useEffect, useState } from "react";
import { getStatus } from "@/actions/auth";
import Loading from "@/commons/components/Loading";

export default function TwitterMenfess() {
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      setLoading(true);
      const status = await getStatus();
      setStatus(status);
      setLoading(false);
    };
    fetchStatus();
  }, []);
  return (
    <div className="h-full lg:overflow-y-auto space-y-6">
      {loading ? (
        <Loading />
      ) : status ? (
        <>
          <Rules />
          <TwitterMenfessForm />
        </>
      ) : (
        <Verify />
      )}
    </div>
  );
}
