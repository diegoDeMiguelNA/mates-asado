import PageReusable from "@/app/components/pageReusable/PageReusable";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Datenschutz: React.FC = () => {
  const entryId: string = "4OT92qPymXUTVF8mo5V38G";
  return <PageReusable entryId={entryId} showLastUpdated={false} />;
};

export default Datenschutz;
