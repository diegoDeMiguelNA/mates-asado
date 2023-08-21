// ProductoLatinos.tsx

import { getProductosLatinos } from "@/lib/contentful/fetchDataFromContentful";
import { Entry } from "contentful";
import {
  IProductoLatinoFields,
  IProductoLatinoReusableFields,
} from "@/@types/generated/contentful";
import ProductoLatinoComponent from "@/app/components/ProductoLatino/ProductoLatino";

const ProductoLatinos: React.FC = async () => {
  const {
    fields: { productoLatinoList, productosLatinoTitle, subtitle },
  }: Entry<IProductoLatinoReusableFields> = await getProductosLatinos(
    "7jVrRgIpZdPmb5foNjoER2"
  );

  return (
    <div className="max-w-7xl flex flex-col items-center">
      <main className="text-center sm:px-10 mb-8 sm:mb-24 mx-2 sm:mx-24">
        <div className="pt-24 pb-4">
          <h2 className="text-2xl sm:text-5xl font-heading uppercase">
            {productosLatinoTitle}
          </h2>
        </div>
        
        <div className="pt-4 pb-8 max-w-[700px]">
          <h3 className="text-sm sm:text-l font-heading uppercase w-full text-center">
            {subtitle}
          </h3>
        </div>

        {productoLatinoList.map((product, index) => (
          <ProductoLatinoComponent
            key={product.sys.id}
            data={product.fields as unknown as IProductoLatinoFields}
            isLast={index === productoLatinoList.length - 1}
          />
        ))}
      </main>
    </div>
  );
};

export default ProductoLatinos;
