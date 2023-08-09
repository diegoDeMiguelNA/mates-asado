import { client } from "./apiClient";

export async function getContentFulData(contentType: string): Promise<ProductosLatinos> {
  let res: ProductosLatinos;
  try {
   const response = await client.getEntries({
      content_type: contentType,
    });
   res = response.items[0].fields; // Assuming you want the fields from the first item in the response.
  } catch (error) {
    throw new Error("No data");
  }

  return res;
}