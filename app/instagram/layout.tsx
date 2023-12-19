import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Links de la bio de Instagram de Mates&Asado",
  openGraph: {
    title: "LinkTree de Mates&Asado",
    description: "Info sobre trámites y actividades en Hamburgo.",
    url: "https://www.mates-asado.de/instagram",
    siteName: "Mates&Asado",
    locale: "es_ES",
    type: "website",
  },
};

export default async function InstagramLayout({
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
