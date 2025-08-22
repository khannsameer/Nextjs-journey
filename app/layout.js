import "./globals.css";
import { Roboto } from "next/font/google";
import { Vollkorn } from "next/font/google";
import { Fugaz_One } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const vollkorn = Vollkorn({
  subsets: ["latin"],
  variable: "--font-vollkorn",
});

const fugazOne = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-Fugaz-One",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={fugazOne.className}> this is for nextJs to change font */}
      <body className={`${fugazOne.variable} ${vollkorn.variable}`}>
        {/* this is for tailwind CSS*/}
        {/* <h1>Home layout</h1> */}
        {children}
      </body>
    </html>
  );
}
