import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deutschland Ticket 🧉",
};

export default function DeutschlandTicketLayout({
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
