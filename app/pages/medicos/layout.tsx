import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Médicos 🧉",
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