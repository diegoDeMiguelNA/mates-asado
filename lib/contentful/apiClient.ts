import { createClient } from "contentful";

export const contentfulClient = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.CONTENTFUL_SPACE!,
});

export async function getEntityData<T>(entryId: string) {
  return contentfulClient.getEntry<T>(entryId);
}
