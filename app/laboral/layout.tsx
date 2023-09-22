import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Busqueda Laboral 🧉",
  openGraph: {
    title: "Busqueda Laboral en Alemania",
    description:
      "Como conseguir trabajo en Alemania, como hacer un curriculum vitae en Alemania, como hacer una carta de presentacion en Alemania, como hacer una carta de motiv",
    url: "https://www.mates-asado.de/pages/fuehrerschein",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Anverso de una licencia de conducir alemana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function LaboralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationElements = await getHomeIcons();
  const filteredMobileMenuElements = navigationElements?.filter(
    icon => icon.fields.extraData !== "/fuehrerschein",
  );
  return (
    <>
      <HeaderBlogPosts navigationElements={filteredMobileMenuElements} />
      <section>{children}</section>;
    </>
  );
}
