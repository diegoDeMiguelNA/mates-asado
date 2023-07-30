import { Metadata } from "next";

export const metadata: Metadata = {
  title: "An-, Um- y Abmeldung 🧉",
};


import { climateCrisis, playfair } from "../fonts";
import "../globals.css";

export default function AnmeldungLayout({
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

