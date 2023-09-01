import { createClient } from "contentful";
import {
  IBlogSubtitleAndParagraphFields,
  IBlogSubtitleParagraphAndImageFields,
  IFuehrerscheinReusableFields,
  IHomeIconResuableFields,
} from "generated/contentful";

export const contentfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE!,
});

async function getEntityData<T>(entryId: string) {
  return contentfulClient.getEntry<T>(entryId);
}

// Home Page Icons
export async function getHomeIcons(entryId: string) {
  const entry =
    await contentfulClient.getEntry<IHomeIconResuableFields>(entryId);
  return entry;
}

// Subtitle and Paragraph content type
export async function getSubtitleAndParagraph(entryId: string) {
  return getEntityData<IBlogSubtitleAndParagraphFields>(entryId);
}

// Subtitle and Paragraph and Images content type
export async function getSubtitleAndParagraphAndImage(entryId: string) {
  return getEntityData<IBlogSubtitleParagraphAndImageFields>(
      entryId
    );
}

// Fetch Data for generic Page (Ex IFuehrerschein)
export async function getReusablePage(entryId: string) {
  const entry =
    await contentfulClient.getEntry<IFuehrerscheinReusableFields>(entryId);
  return entry;
}
