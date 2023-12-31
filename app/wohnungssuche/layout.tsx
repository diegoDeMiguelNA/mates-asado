import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Búsqueda de Departamento 🧉",
  openGraph: {
    title: "Búsqueda de Departamento 🧉",
    description:
      "Tips para encontrar departamento o Wg + como prevenir estafas",
    url: "https://www.mates-asado.de/deutschlandticket",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Imagen de un cartel de busqueda de departamento con un edificio de fondo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default async function WohnungssucheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationElements = await getHomeIcons();
  const filteredMobileMenuElements = navigationElements?.filter(
    icon => icon.fields.extraData !== "/wohnungssuche",
  );
  return (
    <>
      <HeaderBlogPosts navigationElements={filteredMobileMenuElements} />
      <section>{children}</section>
    </>
  );
}
