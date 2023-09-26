import {
  IBlogSubtitleAndParagraphFields,
  IBlogSubtitleParagraphAndImageFields,
  IExperienciaFields,
  IHomeIconResuableFields,
} from "generated/contentful";
import { contentfulClient, getEntityData } from "./apiClient";

export type SubPageFields = {
  homeIconComponent: IHomeIconResuableFields;
  title: string;
  subtitle: string;
  extraData?: string;
  svgFileName?: string;
  width?: number;
  height?: number;
  linkTo: string;
};
export type SubPageData = {
  fields: SubPageFields;
  sys: { id: string };
};

export type HomeIconPageFields = Omit<
  IHomeIconResuableFields,
  "homeIconComponent"
> & {
  homeIconComponent: SubPageData[];
};

export async function getHomeIcons() {
  try {
    const entry = await contentfulClient.getEntry<HomeIconPageFields>(
      "13fZd2HWu0ZBxxNCC00tfT",
    );

    if (entry && entry.fields && entry.fields.homeIconComponent) {
      return entry.fields.homeIconComponent.map((icon, index) => ({
        id: index,
        name: icon.fields.title,
        fields: icon.fields,
      }));
    }

    return [];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching home icons:", error);
    throw error;
  }
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
  return getEntityData<T>(entryId);
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
  const { items } = await contentfulClient.getEntries<IExperienciaFields>({
    content_type: "experiencia",
  });

  if (items.length > 0) {
    return items.find(item => item.fields.slug === slug);
  }

  return null;
}
