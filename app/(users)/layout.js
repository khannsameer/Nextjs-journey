import "../globals.css";
import Navbar from "@/app/components/Navbar";
import { Roboto } from "next/font/google";
import { Vollkorn } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

const vollkorn = Vollkorn({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vollkorn.className}>
        {/* <h1>Home layout</h1> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
