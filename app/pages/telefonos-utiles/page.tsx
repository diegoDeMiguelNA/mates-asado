import PageReusable from "@/app/components/pageReusable/PageReusable";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const TelefonosUtiles: React.FC = () => {
  const entryId: string = "4D7YTPIzMxE8cehzmtN5BQ";
  return PageReusable({ entryId });
};

export default TelefonosUtiles;
