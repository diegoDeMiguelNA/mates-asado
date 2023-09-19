import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";
import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";

export const metadata: Metadata = {
  title: "An-, Um- y Abmeldung 🧉",
  openGraph: {
    title: "An-, Um- y Abmeldung 🧉",
    description: "Primeros pasos en Hamburgo: Empadronamiento",
    url: "https://www.mates-asado.de/pages/anmeldung",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Imagen de un Formulario de Anmeldung",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function AnmeldungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    fields: { homeIconComponent },
  } = await getHomeIcons();
  const filteredMobileMenuElements = homeIconComponent?.filter(
    (icon) => icon.fields.extraData !== "/anmeldung"
  );

  return (
    <>
      <HeaderBlogPosts navigationElements={filteredMobileMenuElements} />
      <section>{children}</section>
    </>
  );
}
