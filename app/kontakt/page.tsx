import PageReusable from "@/app/components/pageReusable/PageReusable";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Contact: React.FC = () => {
  const entryId: string = "59EzGFIebww5bXKn6cACJt";
  return PageReusable({ entryId, showLastUpdated: false });
};

export default Contact;
