import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Feriados Puente 🧉",
  openGraph: {
    title: "Feriados Puente 🧉",
    description:
      "Info sobre los feriados puente en Alemania, como y cuando pedirlos, etc.",
    url: "https://www.mates-asado.de/deutschlandticket",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Calendario con feriados",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function FeriadosLayout({
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
