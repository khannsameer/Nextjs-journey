import "../globals.css";
import Navbar from "@/app/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {/* <h1>Home layout</h1> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
