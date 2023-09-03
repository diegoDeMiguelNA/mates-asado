import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Médicos 🧉",
    description: "Profesionales de la saluds que hablan español en Hamburgo",
    url: "https://www.mates-asado.de/pages/deutschlandticket",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpeg",
        alt: "Medicos cruzados de brazo vestidos de blanco con sus estetoscopios",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MedicosLayout({
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
