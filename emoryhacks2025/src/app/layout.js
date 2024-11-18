import SmoothScrolling from "./components/smoothScrolling";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
});

export const metadata = {
  title: "Emory Hacks 2025",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} antialiased overflow-x-hidden bg-bg`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
