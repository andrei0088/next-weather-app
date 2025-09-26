import GetMeteo from "./components/GetMeteo";

export default function Home() {
  const city: string[] = [
    "Andorra la Vella",
    "Amsterdam",
    "Athens",
    "Belgrade",
    "Berlin",
    "Bern",
    "Bratislava",
    "Brussels",
    "Bucharest",
    "Budapest",
    "Chisinau",
    "Copenhagen",
    "Dublin",
    "Helsinki",
    "Kyiv",
    "Lisbon",
    "Ljubljana",
    "London",
    "Luxembourg",
    "Madrid",
    "Minsk",
    "Monaco",
    "Moscow",
    "Nicosia",
    "Oslo",
    "Paris",
    "Prague",
    "Riga",
    "Rome",
    "San Marino",
    "Skopje",
    "Sofia",
    "Stockholm",
    "Tallinn",
    "Tirana",
    "Vienna",
    "Vilnius",
    "Warsaw",
    "Zagreb",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {city.map((item, index) => (
        <div key={index}>
          <GetMeteo city={item} />
        </div>
      ))}
    </div>
  );
}
