import bg from "../assets/background-home.svg";
import { Offside } from "next/font/google";
import Brands from "./Brands/page";
import Details from "./Details/page";
import GoogleReviews from "./GoogleReviews/page";
const offside = Offside({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div
          className="relative w-full h-screen bg-cover bg-left"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        >
          <div className="absolute bottom-15 left-5 p-8 text-gray-300">
            <p className={`text-[82px] tracking-[13px] ${offside.className}`}>
              WRAP - PRINT - DECAL
            </p>
          </div>
        </div>
        <Brands />
        <Details />
        <GoogleReviews />
      </main>
    </>
  );
}
