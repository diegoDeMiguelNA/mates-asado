import { createClient } from "contentful";

export const contentfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE!,
});

export async function getEntityData<T>(entryId: string) {
  return contentfulClient.getEntry<T>(entryId);
}
