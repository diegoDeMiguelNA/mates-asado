import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Búsqueda de Departamento 🧉",
    description:
      "Tips para encontrar departamento o Wg + como prevenir estafas",
    url: "https://www.mates-asado.de/pages/deutschlandticket",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WohnungssucheLayout({
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
