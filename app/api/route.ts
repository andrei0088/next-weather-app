import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const get = new URL(req.url);
    const city = get.searchParams.get("city");

    const ApiKey = process.env.NEXT_PUBLIC_API_KEY; // free api key

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch weather" },
      { status: 500 }
    );
  }
}
