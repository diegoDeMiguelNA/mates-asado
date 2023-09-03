import { getAsset } from "@/lib/contentful/fetchDataFromContentful";
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
        url: `https:${"//images.ctfassets.net/wdwnckov7fnq/1omR1b1SJKC6hm3eNYpMmH/9c0d9a4fd9b499e01408c364a68f9f97/deutschland_ticket_3.jpeg"}`,
        width: 800,
        height: 600,
      },
      // {
      //   url: "https://nextjs.org/og-alt.png",
      //   width: 1800,
      //   height: 1600,
      //   alt: "My custom alt",
      // },
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
