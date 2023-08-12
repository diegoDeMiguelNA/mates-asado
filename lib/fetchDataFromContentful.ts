import { createClient } from "contentful";
import { NewIPageTemplate } from "generated/contentful";

const {
  NEXT_PUBLIC_ACCESS_TOKEN,
  NEXT_PUBLIC_SPACE,
  NEXT_PUBLIC_ACCESS_TOKEN_TYPESCRIPT,
} = process.env;

export const contentfulClient = createClient({
  accessToken: NEXT_PUBLIC_ACCESS_TOKEN!,
  space: NEXT_PUBLIC_SPACE!,
});

export async function getEntryById(entryId: string) {
  const entry = await contentfulClient.getEntry<NewIPageTemplate>(entryId);
  console.log('entry: ', entry);
  return entry;
}
