import { createClient } from "contentful";
import {
  IFuehrerscheinReusableFields,
  IHomeIconResuableFields,
} from "generated/contentful";

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE } = process.env;

export const contentfulClient = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
  space: CONTENTFUL_SPACE!,
});


// Home Page Icons
export async function getHomeIcons(entryId: string) {
  const entry = await contentfulClient.getEntry<IHomeIconResuableFields>(
    entryId
  );
  return entry;
}


// Fetch Data for generic Page (Ex IFuehrerschein)
export async function getReusablePage(entryId: string) {
  const entry = await contentfulClient.getEntry<IFuehrerscheinReusableFields>(
    entryId
  );
  return entry;
}
