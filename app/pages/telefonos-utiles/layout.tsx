import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Teléfonos Útiles 🧉",
    description:
      "Listado de teléfonos útiles y organismos de gobierno en Hamburgo",
    url: "https://www.mates-asado.de/pages/deutschlandticket",
    siteName: "Mates&Asado",
    images: [
      {
        width: 800,
        height: 600,
        url: "./opengraph-image.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function TelefonosUtilesLayout({
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
