import { Metadata } from "next";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Ubuntu } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Vinio",
  description: "The web application that takes the guesswork out of wine pairing!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
