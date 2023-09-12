import { IHomeIconResuableFields } from "@/@types/generated/contentful";
import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Entry } from "contentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Datenschutz",
  openGraph: {
    title: "Datenschutz",
    description:
      "Info sobre protección de datos en el sitio web de Mates&Asado",
    url: "https://www.mates-asado.de/pages/about-us",
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
