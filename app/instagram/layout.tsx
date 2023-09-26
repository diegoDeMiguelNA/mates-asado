import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Links de la bio de Instagram de Mates&Asado",
  openGraph: {
    title: "Instagram",
    description: "Info sobre trámites y actividades en Hamburgo.",
    url: "https://www.mates-asado.de/instagram",
    siteName: "Mates&Asado",
    locale: "en_US",
    type: "website",
  },
};

export default async function DatenSchutzLayout({
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
