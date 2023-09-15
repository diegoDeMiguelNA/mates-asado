import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Búsqueda de Departamento 🧉",
  openGraph: {
    title: "Búsqueda de Departamento 🧉",
    description:
      "Tips para encontrar departamento o Wg + como prevenir estafas",
    url: "https://www.mates-asado.de/pages/deutschlandticket",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Imagen de un cartel de busqueda de departamento con un edificio de fondo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function WohnungssucheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    fields: { homeIconComponent },
  } = await getHomeIcons();
  const filteredMobileMenuElements = homeIconComponent?.filter(
    (icon) => icon.fields.extraData !== "/wohnungssuche"
  );
  return (
    <>
      <HeaderBlogPosts navigationElements={filteredMobileMenuElements} />
      <section>{children}</section>
    </>
  );
}
