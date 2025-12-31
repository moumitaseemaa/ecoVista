import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoVista",
  description: "One Place Dashboard for Eco Information",
};

export default function RootLayout({
  children,
  aqi,
  weather,
  wind,
  temperature,
}) {
  return (
    <div className="wrapper">
      <div className="overlay h-full"></div>
      <Image
        src="/background.png"
        alt="nature pic"
        fill
        priority
        className="object-cover z-0"
      />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}
