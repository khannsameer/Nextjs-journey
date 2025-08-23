import "./globals.css";
import { Roboto } from "next/font/google";
import { Vollkorn } from "next/font/google";
import { Fugaz_One } from "next/font/google";

export const metadata = {
  title: {
    default: "Demo  | Learn Web Development",
    template: "%s | With Sameer",
  },
  description:
    "Free tutorials on React.js, Next.js, and web development by Sameer.",
  keywords: ["React", "Next.js", "Web Development"],
  // icons: {
  //   icon: "/img.jpg",
  // },
  metadataBase: new URL("https://thapatechical.com"),
  openGraph: {
    title: "Techn",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "Sameer Techn",
    images: [
      {
        url: "/planet.jpg",
        width: 1200,
        height: 630,
        alt: "Tech",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech",
    description: "Learn Web Dev from scratch with Sameer",
    creator: "@sameer",
    // images: ["/og-image.png"],
  },
};

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
      {/* <body className={fugazOne.className}> this is in nextJs to change font */}
      <body className={`${fugazOne.variable} ${vollkorn.variable}`}>
        {/* this is for tailwind CSS*/}
        {/* <h1>Home layout</h1> */}
        {children}
      </body>
    </html>
  );
}
