import React from "react";

const page = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 rounded-xl shadow-md max-w-4xl mx-auto my-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">About WeatherApp</h2>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          <strong>WeatherApp</strong> is a modern web application that provides
          real-time weather updates for major European cities. Quickly check
          temperature, humidity, wind speed and direction, and overall weather
          conditions in a clean, intuitive interface designed for easy use on
          any device.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          Built with <strong>Next.js</strong> on the frontend and{" "}
          <strong>Next API Routes</strong> on the backend, WeatherApp delivers
          fast, accurate, and reliable weather information. Its responsive
          design ensures a seamless experience across desktops, tablets, and
          mobile devices.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          <strong>Created by the Weather App Team</strong> – focused on building
          simple, modern, and user-friendly web applications.
        </p>
      </div>
    </section>
  );
};

export default page;
