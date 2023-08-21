import { createClient } from "contentful";
import {
  IHomeIconResuableFields,
  IProductoLatinoReusableFields,
} from "generated/contentful";

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE } = process.env;

export const contentfulClient = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
  space: CONTENTFUL_SPACE!,
});

export async function getProductosLatinos(entryId: string) {
  const entry = await contentfulClient.getEntry<IProductoLatinoReusableFields>(
    entryId
  );
  return entry;
}

export async function getHomeIcons(entryId: string) {
  const entry = await contentfulClient.getEntry<IHomeIconResuableFields>(
    entryId
  );
  return entry;
}
