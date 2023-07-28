import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mates&Asado 🧉",
  description:
    "Mates&Asado is a website for spanish speaking people in Hamburg looking for information about errands and paperwork.",
    icons: {
      icon: "/favicon.ico",
      shortcut: '/favicon.ico',

    }
};

import { climateCrisis, playfair } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${climateCrisis.variable}`}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
