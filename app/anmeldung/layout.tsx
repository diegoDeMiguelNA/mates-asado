import { Metadata } from "next";

export const metadata: Metadata = {
  title: "An-, Um- y Abmeldung 🧉",
};

import "../globals.css";

export default function AnmeldungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
    >
      <head />
      <body>{children}</body>
    </html>
  );
}

