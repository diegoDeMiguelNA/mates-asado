import PageReusable from "@/app/components/pageReusable/PageReusable";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const ProductoLatinos: React.FC = () => {
  const entryId: string = "1LNgGtuw1d8Cv9eyo0nSAe";
  return PageReusable({ entryId });
};

export default ProductoLatinos;

