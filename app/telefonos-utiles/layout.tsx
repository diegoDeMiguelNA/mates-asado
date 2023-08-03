import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teléfonos Útiles 🧉",
};


export default function WohnungssucheLayout({
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
