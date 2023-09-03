import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Deutschland Ticket 🧉",
    description:
      "Info sobre el Deutschland Ticket, como pedirlo, precios, etc.",
    url: "https://www.mates-asado.de/pages/deutschlandticket",
    siteName: "Mates&Asado",
    images: [
      {
        width: 800,
        height: 600,
        url: "./opengraph-image.jpeg",
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
  return (
    <>
      <section>{children}</section>
    </>
  );
}
