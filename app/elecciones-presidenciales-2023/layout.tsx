import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Elecciones 2023 🧉",
  openGraph: {
    title: "Elecciones 2023 🧉",
    description:
      "Información sobre como votar y justificar tu ausencia para las elecciones",
    url: "https://www.mates-asado.de/elecciones-presidenciales-2023",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Una urna de votación",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function EleccionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationElements = await getHomeIcons();

  return (
    <>
      <HeaderBlogPosts navigationElements={navigationElements} />
      <section>{children}</section>
    </>
  );
}
