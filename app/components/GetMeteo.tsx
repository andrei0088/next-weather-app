"use client";

import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
  city: string;
}

interface Weather {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: { description: string; icon: string }[];
  wind: { speed: number; deg: number };
}

const GetMeteo = ({ city }: Props) => {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(`/api?city=${city}`);
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchWeather();
  }, [city]);

  const getWindDirection = (deg?: number) => {
    if (deg === undefined) return "";
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    const idx = Math.round((deg % 360) / 45);
    return directions[idx];
  };

  const getBootstrapWeatherIcon = (owmIcon?: string) => {
    if (!owmIcon) return "bi-question-circle";
    const map: { [key: string]: string } = {
      "01d": "bi-sun",
      "01n": "bi-moon",
      "02d": "bi-cloud-sun",
      "02n": "bi-cloud-moon",
      "03d": "bi-cloud",
      "03n": "bi-cloud",
      "04d": "bi-clouds",
      "04n": "bi-clouds",
      "09d": "bi-cloud-drizzle",
      "09n": "bi-cloud-drizzle",
      "10d": "bi-cloud-rain",
      "10n": "bi-cloud-rain",
      "11d": "bi-cloud-lightning",
      "11n": "bi-cloud-lightning",
      "13d": "bi-cloud-snow",
      "13n": "bi-cloud-snow",
      "50d": "bi-cloud-fog",
      "50n": "bi-cloud-fog",
    };
    return map[owmIcon] || "bi-question-circle";
  };

  if (!weather) {
    return (
      <div className="animate-pulse bg-gray-200 rounded-xl h-64 w-64"></div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-indigo-50 via-indigo-100 to-indigo-200 text-gray-900 p-5 rounded-xl shadow-md w-64 flex flex-col items-center transition-transform transform hover:scale-105">
      {/* Icon și titlu */}
      <div className="flex flex-col items-center mb-4">
        <i
          className={`bi ${getBootstrapWeatherIcon(
            weather.weather?.[0]?.icon
          )} text-5xl mb-2`}
          aria-label={weather.weather?.[0]?.description ?? "Weather icon"}
        ></i>
        <h2 className="text-lg font-semibold text-center capitalize">{city}</h2>
        <p className="text-gray-700 text-sm capitalize">
          {weather.weather?.[0]?.description ?? "N/A"}
        </p>
      </div>

      {/* Info meteo */}
      <ul className="w-full space-y-1 text-center text-gray-800">
        <li>
          <span className="font-medium">Temp:</span>{" "}
          {weather.main?.temp ?? "N/A"} °C
        </li>
        <li>
          <span className="font-medium">Feels like:</span>{" "}
          {weather.main?.feels_like ?? "N/A"} °C
        </li>
        <li>
          <span className="font-medium">Pressure:</span>{" "}
          {weather.main?.pressure ?? "N/A"} hPa
        </li>
        <li>
          <span className="font-medium">Humidity:</span>{" "}
          {weather.main?.humidity ?? "N/A"} %
        </li>
        <li>
          <span className="font-medium">Wind:</span>{" "}
          {((weather.wind?.speed ?? 0) * 3.6).toFixed(1)} km/h
          {weather.wind?.deg != null &&
            ` • ${getWindDirection(weather.wind.deg)}`}
        </li>
      </ul>
    </section>
  );
};

export default GetMeteo;
