import { climateCrisis, playfair } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${climateCrisis.variable}`}
    >
      <head />
      <body>{children}</body>
    </html>
  );
}
