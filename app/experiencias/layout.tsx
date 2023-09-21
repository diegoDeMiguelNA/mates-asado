import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Experiencias",
  openGraph: {
    title: "Experiencias",
    description:
      "Hispanohablantes comparten sus experiencias realizando diferentes trámites en Alemania..",
    url: "https://www.mates-asado.de/pages/deutschlandticket",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Imagen de una licencia de conducir alemana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function ExperienciasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    fields: { homeIconComponent },
  } = await getHomeIcons();
  return (
    <>
      <HeaderBlogPosts navigationElements={homeIconComponent} />
      <section>{children}</section>
    </>
  );
}
