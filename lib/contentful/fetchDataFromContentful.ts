import { createClient } from "contentful";
import {
  IBlogSubtitleAndParagraphFields,
  IBlogSubtitleParagraphAndImageFields,
  IFuehrerscheinReusableFields,
  IHomeIconResuableFields,
} from "generated/contentful";

export const contentfulClient = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.CONTENTFUL_SPACE!,
});

// Home Page Icons
export async function getHomeIcons(entryId: string) {
  const entry =
    await contentfulClient.getEntry<IHomeIconResuableFields>(entryId);
  return entry;
}

// Subtitle and Paragraph content type
export async function getSubtitleAndParagraph(entryId: string) {
  const entry =
    await contentfulClient.getEntry<IBlogSubtitleAndParagraphFields>(entryId);
  return entry;
}

// Subtitle and Paragraph and Images content type
export async function getSubtitleAndParagraphAndImage(entryId: string) {
  const entry =
    await contentfulClient.getEntry<IBlogSubtitleParagraphAndImageFields>(
      entryId
    );
  return entry;
}

// Fetch Data for generic Page (Ex IFuehrerschein)
export async function getReusablePage(entryId: string) {
  const entry =
    await contentfulClient.getEntry<IFuehrerscheinReusableFields>(entryId);
  return entry;
}
