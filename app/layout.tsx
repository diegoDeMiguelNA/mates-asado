import "./globals.css";
import { lemonMilk } from "./fonts/fonts";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { getAsset, getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { IHomeIconResuableFields } from "@/@types/generated/contentful";
import { Entry } from "contentful";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import CookieBanner from "./components/cookieBanner.tsx/cookieBanner";
import ModalNovedades from "./novedades/modal";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mates-asado.de"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
  title: "Mates y Asado🧉",
  description:
    "Sitio web de ayuda para la comunidad hispano-hablante de Hamburgo",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "Anmeldung",
    "Germany",
    "Alemania",
    "Vivir en Alemania",
    "Licencia de conducir Alemania",
    "Informacion emigracion alemania",
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    fields: { homeIconComponent },
  }: Entry<IHomeIconResuableFields> = await getHomeIcons();

  const { fields } = await getAsset("70ugPGYgMr3ZANJCLuPQx9");
  
  return (
    <html
      lang="en"
      className={`${montserrat.variable}} ${lemonMilk.variable} `}
    >
      <head />
      <body>
        <ModalNovedades fields={fields} />
        <Header navigationElements={homeIconComponent} />

        {children}

        <Footer />
        
        <CookieBanner />
      </body>
    </html>
  );
}
