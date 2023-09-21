import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Impressum",
  openGraph: {
    title: "Impressum",
    description: "RECHTLICHE INFORMATIONEN UND KONTAKTDATE",
    url: "https://www.mates-asado.de/pages/impressum",
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
