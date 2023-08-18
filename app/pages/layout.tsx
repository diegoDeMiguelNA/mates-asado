import "../globals.css";
import { lemonMilk } from "../fonts/fonts";

import { Metadata } from "next";
import Header from "../components/header/header";

export const metadata: Metadata = {
  title: "Mates&Asado 🧉",
  description:
    "Mates&Asado es un sitio web de ayuda para la comunidad hispano-hablante de Hamburgo",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lemonMilk.variable}`}>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
