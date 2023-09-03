import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Licencia de Conducir 🧉",
    description:
      "Como obtener la licencia de conducir en Alemania, que necesitas, cuanto cuesta, etc.",
    url: "https://www.mates-asado.de/pages/deutschlandticket",
    siteName: "Mates&Asado",
    images: [
      {
        width: 800,
        height: 600,
        url: "./opengraph-image.jpeg",
        alt: "Anverso de una licencia de conducir alemana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function FuhrerscheinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
