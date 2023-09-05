import PageReusable from "@/app/components/pageReusable/PageReusable";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const DeutschlandTicket: React.FC = () => {
  const entryId: string = "5QeUR6869EvCkNCpEGcMQi";
  return PageReusable({ entryId });
};

export default DeutschlandTicket;
