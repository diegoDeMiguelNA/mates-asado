import { Entry, createClient } from "contentful";
import { IPageTemplateFields, IHomeIconsFields, IHomeIconResuableFields } from "generated/contentful";

const {
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_SPACE,
} = process.env;

export const contentfulClient = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
  space: CONTENTFUL_SPACE!,
});

export async function getPageTemplate(entryId: string) {
  const entry = await contentfulClient.getEntry<IPageTemplateFields>(entryId);
  return entry;
}

export async function getIconProps(entryId: string) {
  const entry = await contentfulClient.getEntry<IHomeIconsFields>(entryId);
  return entry;
}

export async function getHomeIcons(entryId: string) {
  const entry = await contentfulClient.getEntry<IHomeIconResuableFields>(entryId);
  return entry;
}
