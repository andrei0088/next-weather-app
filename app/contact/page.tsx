import React from "react";

const page = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 rounded-xl shadow-md max-w-4xl mx-auto my-12">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          Have questions, suggestions, or feedback about{" "}
          <strong>WeatherApp</strong>? We’d love to hear from you!
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          You can reach the <strong>Weather App Team</strong> on LinkedIn:{" "}
          <br />
          <a
            href="https://www.linkedin.com/in/andrei-davidoiu-9794b42b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            Connect with us on LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
};

export default page;
