import PageReusable from "@/app/components/pageReusable/PageReusable";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Wohnungssuche: React.FC = () => {
  const entryId: string = "2lAekDy2OasiUxrA9ZPER";
  return <PageReusable entryId={entryId} />;
};

export default Wohnungssuche;
