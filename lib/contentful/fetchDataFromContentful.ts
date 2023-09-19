import {
  IBlogSubtitleAndParagraphFields,
  IBlogSubtitleParagraphAndImageFields,
  IExperienciaFields,
  IHomeIconResuableFields,
} from "generated/contentful";
import { contentfulClient, getEntityData } from "./apiClient";

export type SubPageFields = {
  homeIconComponent: any;
  title: string;
  subtitle: string;
  extraData?: any;
  svgFileName?: string;
  width?: number;
  height?: number;
}
export type SubPageData = {
  fields: SubPageFields;
  sys: { id: string };
};
 
export type HomeIconPageFields = Omit<IHomeIconResuableFields, "homeIconComponent"> & {
  homeIconComponent: SubPageData[];
};

// Home Page Icons
export async function getHomeIcons() {
  return getEntityData<HomeIconPageFields>("13fZd2HWu0ZBxxNCC00tfT");
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
export async function getReusablePage<T>(entryId: string) {
  return getEntityData<T>(
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
  const { items } = await contentfulClient.getEntries<IExperienciaFields>(
    "Experiencia"
  );

  if (items.length > 0) {
    return items.find((item) => item.fields.slug === slug);
  }

  return;
}
