import { getAsset } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { headers } from "next/headers";
import CookieBanner from "./components/cookieBanner.tsx/cookieBanner";
import Footer from "./components/footer/footer";
import lemonMilk from "./fonts/fonts";
import "./globals.css";
import Novedades from "./novedades/novedades";

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
  let fields;
  let cookieName;
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  try {
    const assetData = await getAsset("2ragBbk2rLkCu84WvEs9ur");
    fields = assetData.fields;
    cookieName = assetData.fields.title;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching data:", error);
  }

  return (
    <html lang="en" className={`${montserrat.variable}} ${lemonMilk.variable}`}>
      <head />
      <body className="min-h-screen">
        {pathname !== "/instagram" && fields && (
          <Novedades fields={fields} cookieName={cookieName} />
        )}

        {children}

        <Footer />

        <CookieBanner />
      </body>
    </html>
  );
}
