import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Führerschein 🧉",
};


export default function FuehrerscheinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {" "}
        {children}
      </body>
    </html>
  );
}
