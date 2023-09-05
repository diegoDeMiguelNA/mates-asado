import { createClient } from "contentful";
import {
  IBlogSubtitleAndParagraphFields,
  IBlogSubtitleParagraphAndImageFields,
  IFuehrerscheinReusableFields,
  IHomeIconResuableFields,
} from "generated/contentful";
import { cache } from "react";

export const revalidate = 3;

export const contentfulClient = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.CONTENTFUL_SPACE!,
});

export const getEntityData = cache(async function <T>(entryId: string) {
  return contentfulClient.getEntry<T>(entryId);
});

// Home Page Icons
export async function getHomeIcons() {
  return getEntityData<IHomeIconResuableFields>("13fZd2HWu0ZBxxNCC00tfT");
}

// Subtitle and Paragraph content type
export async function getSubtitleAndParagraph(entryId: string) {
  return getEntityData<IBlogSubtitleAndParagraphFields>(entryId);
}

// Subtitle and Paragraph and Images content type
export async function getSubtitleAndParagraphAndImage(entryId: string) {
  return getEntityData<IBlogSubtitleParagraphAndImageFields>(entryId);
}

// Fetch Data for generic Page (Ex IFuehrerschein)
export async function getReusablePage(entryId: string) {
  return getEntityData<IFuehrerscheinReusableFields>(entryId);
}

// Fetch Asset from contentful
export const getAsset = cache(async function (assetId: string) {
  return contentfulClient.getAsset(assetId);
});
