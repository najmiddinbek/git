import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Logo from "../public/Remove-bg.ai_1701116393719 (1).png";
import { CiWarning } from "react-icons/ci";

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
          <div className="max-w-7xl mx-auto p-4 ">
            {/* <Navbar /> */}
            <div className="flex items-end justify-center"></div>
            <h1 className="text-[16px] mb-10 md:text-xl text-white text-center rounded-xl border-red-600">
              <center>
                <CiWarning className="text-5xl text-red-500 mb-2 animation" />
              </center>
              Taqiqlangan diniy mazmundagi materiallarni tayyorlash, saqlash,
              tarqatish va namoyish etish Jinoyat kodeksining 244¹-moddasiga
              asosan <b>5</b> yildan <b>8 </b>yilgacha ozodlikdan maxrum qilish
              bilan jazolanadi
            </h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
