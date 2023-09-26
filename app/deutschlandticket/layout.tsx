import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Deutschland Ticket 🧉",
  openGraph: {
    title: "Deutschland Ticket 🧉",
    description:
      "Info sobre el Deutschland Ticket, como pedirlo, precios, etc.",
    url: "https://www.mates-asado.de/deutschlandticket",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Imagen de un tren regional de la Deutsche Bahn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function DeutschlandTicketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationElements = await getHomeIcons();
  const filteredMobileMenuElements = navigationElements?.filter(
    icon => icon.fields.extraData !== "/deutschlandticket",
  );

  return (
    <>
      <HeaderBlogPosts navigationElements={filteredMobileMenuElements} />
      <section>{children}</section>
    </>
  );
}
