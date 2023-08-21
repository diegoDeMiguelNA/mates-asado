import { IProductoLatinoFields } from "@/@types/generated/contentful";


interface ProductoLatinoComponentProps {
  data: IProductoLatinoFields;
}

const ProductoLatinoComponent: React.FC<ProductoLatinoComponentProps> = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl sd:3xl font-heading uppercase my-16">{data.title}</h2>
      {data.address && <p className="underline mb-2">{data.address}</p>}
      {data.webSite && (
        <p className="mt-12 mb-16">
          <a className="underline" href={data.webSite}>{data.webSite}</a>
        </p>
      )}
      {data.openingHours && <p>{data.openingHours}</p>}
      <hr />
    </div>
  );
}

export default ProductoLatinoComponent;
