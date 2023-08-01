import { Metadata } from "next";
import "../styles/globals.css";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "300" });

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
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
