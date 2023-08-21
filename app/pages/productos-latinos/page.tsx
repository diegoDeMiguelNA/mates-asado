// ProductoLatinos.tsx

import { getProductosLatinos } from "@/lib/contentful/fetchDataFromContentful";
import { Entry } from "contentful";
import { IProductoLatinoFields, IProductoLatinoReusableFields } from "@/@types/generated/contentful";
import ProductoLatinoComponent from "@/app/components/ProductoLatino/ProductoLatino";


const ProductoLatinos: React.FC = async () => {
  const {
    fields: { productoLatinoList, productosLatinoTitle },
  }: Entry<IProductoLatinoReusableFields> = await getProductosLatinos(
    "7jVrRgIpZdPmb5foNjoER2"
  );

  return (
    <div className="max-w-7xl mx-auto">
      <main className="text-center sm:px-10 mb-8 sm:mb-24 mx-2 sm:mx-24">
        <div className="py-24">
          <h1 className="text-2xl sm:text-5xl font-heading uppercase">{productosLatinoTitle}</h1>
        </div>

        {productoLatinoList.map((product) => (
          <ProductoLatinoComponent key={product.sys.id}  data={product.fields as unknown as IProductoLatinoFields} />
        ))}
      </main>
    </div>
  );
}

export default ProductoLatinos;
