import PageReusable from "@/app/components/pageReusable/PageReusable";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Fuehrerschein: React.FC = () => {
  const entryId: string = "4z4TZ5l87ag6Lv5xKeLIi";
  return <PageReusable entryId={entryId} />
};

export default Fuehrerschein;
