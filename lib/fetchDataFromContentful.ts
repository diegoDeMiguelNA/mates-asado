import { createClient } from "contentful";
import { IPageTemplateFields } from "generated/contentful";

const {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE,
} = process.env;

export const contentfulClient = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
  space: CONTENTFUL_SPACE!,
});

export async function getEntryById(entryId: string) {
  const entry = await contentfulClient.getEntry<IPageTemplateFields>(entryId);
  return entry;
}
