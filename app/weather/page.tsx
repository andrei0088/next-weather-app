"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import GetMeteo from "../components/GetMeteo";

export const dynamic = "force-dynamic";

const WeatherPage = () => {
  const searchParams = useSearchParams(); // hook apelat direct
  const city = searchParams?.get("city") ?? "Bucharest"; // fallback

  return (
    <div className="w-fit mx-auto my-7">
      <GetMeteo city={city} />
    </div>
  );
};

export default WeatherPage;
