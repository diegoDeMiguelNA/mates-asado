import { createClient } from "contentful";
import {
  IBlogSubtitleAndParagraphFields,
  IBlogSubtitleParagraphAndImageFields,
  IFuehrerscheinReusableFields,
  IHomeIconResuableFields,
} from "generated/contentful";

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE } = process.env;

export const contentfulClient = createClient({
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
  space: CONTENTFUL_SPACE!,
});

async function getEntityData<T>(entryId: string) {
  return contentfulClient.getEntry<T>(entryId);
}

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
  return getEntityData<IBlogSubtitleParagraphAndImageFields>(
      entryId
    );
}

// Fetch Data for generic Page (Ex IFuehrerschein)
export async function getReusablePage(entryId: string) {
  return getEntityData<IFuehrerscheinReusableFields>(
    entryId
  );
}
