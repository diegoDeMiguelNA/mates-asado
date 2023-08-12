import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mates&Asado 🧉",
  description:
    "Mates&Asado es un sitio web de ayuda para la comunidad hispano-hablante de Hamburgo",
    icons: {
      icon: "/favicon.ico",
      shortcut: '/favicon.ico',

    }
};


import "./globals.css";

export default function RootLayout({
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
