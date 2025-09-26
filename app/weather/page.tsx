"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import GetMeteo from "../components/GetMeteo";

export const dynamic = "force-dynamic";

const Page = () => {
  const searchParams = typeof window !== "undefined" ? useSearchParams() : null;
  const city: string = searchParams?.get("city") || "Bucharest";

  return (
    <div className="w-fit mx-auto my-7">
      <Suspense fallback={<div>Loading...</div>}>
        <GetMeteo city={city} />
      </Suspense>
    </div>
  );
};

export default Page;
