import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos Latinos 🧉",
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
