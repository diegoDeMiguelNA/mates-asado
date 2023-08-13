import "./globals.css";
import "./globals.css";
import { lemonMilk } from "./fonts/fonts";

import { Metadata } from "next";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Mates&Asado 🧉",
  description:
    "Mates&Asado es un sitio web de ayuda para la comunidad hispano-hablante de Hamburgo",
    icons: {
      icon: "/favicon.ico",
      shortcut: '/favicon.ico',

    }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lemonMilk.variable}`}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
