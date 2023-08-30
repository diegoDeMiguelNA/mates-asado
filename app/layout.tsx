import "./globals.css";
import { lemonMilk } from "./fonts/fonts";
import { Metadata } from "next";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mates-asado.de'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
  title: "Mates y Asado🧉",
  description:
    "Sitio web de ayuda para la comunidad hispano-hablante de Hamburgo",
    icons: {
      icon: "/favicon.ico",
      shortcut: '/favicon.ico',

    },
    keywords: ["Anmeldung", "Germany", "Alemania", "Vivir en Alemania", "Licencia de conducir Alemania", "Informacion emigracion alemania"],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable}} ${lemonMilk.variable} `}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
