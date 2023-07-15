import Donpoligrafbum from "next/font/local";
import {Montserrat} from "@next/font/google";


export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const donpoligrafbum = Donpoligrafbum({
  src: "../fonts/Donpoligrafbum-Bold.otf",
  display: "swap",
  variable: "--font-donpoligrafbum",
});


