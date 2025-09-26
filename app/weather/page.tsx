"use client"; 

import React from "react";
import { useSearchParams } from "next/navigation";
import GetMeteo from "../components/GetMeteo";

const WeatherPage = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") ;

  return (
    <div className="w-fit mx-auto my-7">
        <GetMeteo city={city} />
        {/* Poți adăuga mai multe GetMeteo cu alte orașe aici */}
      </div>
    </div>
  );
};

export default WeatherPage;



