"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import GetMeteo from "../components/GetMeteo";

const WeatherPage = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") ?? "Bucharest";

  return (
    <div className="w-fit mx-auto my-7">
      <GetMeteo city={city} />
    </div>
  );
};

export default WeatherPage;
