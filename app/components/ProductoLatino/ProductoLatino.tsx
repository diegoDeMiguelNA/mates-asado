import { IProductoLatinoFields } from "@/@types/generated/contentful";

interface ProductoLatinoComponentProps {
  data: IProductoLatinoFields;
}

const ProductoLatinoComponent: React.FC<ProductoLatinoComponentProps> = ({
  data,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-xl sd:3xl font-heading uppercase my-16">
        {data.title}
      </h2>
      {data.address && (
        <p className="underline mb-2 word-break max-w-[280px]">
          {data.address}
        </p>
      )}
      {data.webSite && (
        <p className="mt-12 mb-12">
          <a className="underline" href={data.webSite}>
            {data.webSite}
          </a>
        </p>
      )}
      {data.openingHours && <p className="mb-20">{data.openingHours}</p>}
    </div>
  );
};

export default ProductoLatinoComponent;
