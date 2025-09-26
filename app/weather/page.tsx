"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import GetMeteo from "../components/GetMeteo";

const Page = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "Bucharest";

  return (
    <div className="w-fit mx-auto my-7">
      <GetMeteo city={city} />
    </div>
  );
};

export default Page;
("use client");
import dynamic from "next/dynamic";
import React from "react";
import { useSearchParams } from "next/navigation";
import GetMeteo from "../components/GetMeteo";

// ...existing code...

const Page = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "Bucharest";

  return (
    <div className="w-fit mx-auto my-7">
      <GetMeteo city={city} />
    </div>
  );
};

export default Page;

// Add this to force client-side rendering
export const dynamic = "force-dynamic";
("use client");
import React from "react";
import { useSearchParams } from "next/navigation";
import GetMeteo from "../components/GetMeteo";

const Page = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "Bucharest";

  return (
    <div className="w-fit mx-auto my-7">
      <GetMeteo city={city} />
    </div>
  );
};

export default Page;
export const dynamic = "force-dynamic";
