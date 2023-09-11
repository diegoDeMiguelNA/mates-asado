import { createClient } from "contentful";
import {
  IBlogSubtitleAndParagraphFields,
  IBlogSubtitleParagraphAndImageFields,
  IExperienciaFields,
  IFuehrerscheinReusableFields,
  IHomeIconResuableFields,
} from "generated/contentful";

export const contentfulClient = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  space: process.env.CONTENTFUL_SPACE!,
});

export async function getEntityData<T>(entryId: string) {
  return contentfulClient.getEntry<T>(entryId);
}

export type SubPage = {
  fields: {
    homeIconComponent: any;
    title: string;
    subtitle: string;
    extraData?: any;
    svgFileName?: string;
    width?: number;
    height?: number;
  };
  sys: { id: string };
};

type HomeIconPageFields = Omit<IHomeIconResuableFields, "homeIconComponent"> & {
  homeIconComponent: SubPage[];
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
export async function getReusablePage(entryId: string) {
  return getEntityData<IFuehrerscheinReusableFields>(entryId);
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
    const experiencia: any = items.find((item) => {
      return item.fields.slug === slug;
    });
    return experiencia;
  }

  return null;
}
