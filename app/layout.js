import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { CiWarning } from "react-icons/ci";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main_div">
          <div className="max-w-7xl mx-auto p-4">
            {/* <Navbar /> */}
            <div className="flex items-end justify-center"></div>
            <h1 className="text-[15px]  md:text-xl text-white text-center rounded-xl border-red-600">
              <center>
                <CiWarning className="text-5xl text-red-500 mb-2 animation" />
                <h1 className="text-2xl">DIQQAT</h1>
                Yangilandi
              </center>
              Taqiqlangan diniy mazmundagi materiallarni tayyorlash, saqlash,
              tarqatish va namoyish etish Jinoyat kodeksining{" "}
              <Link
                href={"https://lex.uz/uz/ "}
                className="text-blue-600 underline"
              >
                244¹-moddasiga {""}
              </Link>
              asosan <b>5</b> yildan <b>8 </b>yilgacha ozodlikdan maxrum qilish
              bilan jazolanadi
            </h1>
            <center></center>
            <div className="mt-5">{children}</div>
            <div className="flex items-center justify-center mt-20">
              <Link href={"https://www.youtube.com/watch?v=ySBlCOMxjIs"}>
                <MdOutlineSlowMotionVideo className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
