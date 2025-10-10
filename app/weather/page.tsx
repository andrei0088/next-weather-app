// app/weather/page.tsx
import React from "react";
import GetMeteo from "../components/GetMeteo";

type WeatherPageProps = {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
};

export default async function WeatherPage({ searchParams }: WeatherPageProps) {
  // Așteptăm rezolvarea promisiunii pentru a obține parametrii
  const params = await searchParams;
  const city = params?.city ?? "Bucharest";

  return (
    <div className="w-fit mx-auto my-7">
      <GetMeteo city={city} />
    </div>
  );
}
