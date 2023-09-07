import { createClient } from "contentful";
import {
  IBlogSubtitleAndParagraphFields,
  IBlogSubtitleParagraphAndImageFields,
  IExperienciaFields,
  IHomeIconResuableFields,
  IMedicoprofesionalDeLaSalud
} from "../../@types/generated/contentful";
import { s } from "vitest/dist/types-198fd1d9.js";

export const contentfulClient = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.CONTENTFUL_SPACE!,
});

export async function getEntityData<T>(entryId: string) {
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
  return getEntityData<IBlogSubtitleParagraphAndImageFields>(entryId);
}

// Fetch Data for generic Page (Ex IFuehrerschein)
export async function getReusablePage(entryId: string) {
  return getEntityData<IMedicoprofesionalDeLaSalud>(
    entryId
  );
}

// Fetch Asset from contentful
export async function getAsset(assetId: string) {
  return contentfulClient.getAsset(assetId);
}

// Fetch Experiencias from contentful
export async function getExperiencia(entryId: string) {
  return getEntityData<IExperienciaFields>(entryId);
}

// Fetch Experiencias from contentful by slug
export async function getExperienciaBySlug(slug: string) {
  const { items } =
    await contentfulClient.getEntries<IExperienciaFields>("Experiencia");

  if (items.length > 0) {
    const experiencia: any = items.find((item) => {
      return item.fields.slug === slug;
    });
    return experiencia;
  }

  return null;
}
