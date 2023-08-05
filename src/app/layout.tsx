import { Metadata } from "next";
import "../styles/globals.css";
import { Comme } from "next/font/google";

const comme = Comme({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Vinio",
  description:
    "The web application that takes the guesswork out of wine pairing!",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={comme.className}>{children}</body>
    </html>
  );
}
