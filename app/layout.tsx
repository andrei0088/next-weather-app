import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Hamburger from "./components/Hamburger";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Online meteo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full top-0 left-0 z-50 bg-gray-900 text-white shadow-md">
          <div className="hidden md:flex max-w-7xl mx-auto  items-center justify-between px-6 py-3">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-5 justify-center pl-6 pr-6 items-center bg-white rounded-full">
                <Image src="/logo.png" alt="Logo" width={48} height={48} />
                <span className="text-xl font-bold text-gray-800">Weather</span>
              </div>
            </div>

            {/* Links */}
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-yellow-400 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Search */}
            <form
              className="hidden md:flex items-center bg-white/90 rounded-full px-3 py-1"
              action="/weather"
            >
              <input
                type="text"
                name="city"
                placeholder="Search city..."
                className="bg-transparent text-gray-900 placeholder-gray-600 focus:outline-none"
              />
              <button
                type="submit"
                className="ml-2 text-yellow-400 hover:text-yellow-300 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="var(--color-gray-900)"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </form>
          </div>
          <Hamburger />
        </nav>

        {children}

        <footer className="bg-gray-900 text-gray-300 py-6">
          <div className="container w-[80vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
            <span className="text-sm">
              &copy; {new Date().getFullYear()} WeatherApp
            </span>
            <span className="text-sm">
              Made with <span className="text-red-500">❤</span> by{" "}
              <strong>Weather App Team</strong>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
