// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBlogSubtitleAndParagraphFields {
  /** Subtitle */
  subtitle?: string | undefined;

  /** Paragraph */
  paragraph: Document;
}

/** This is the template for a blog post chunk with a subtitle and a paragraph */

export interface IBlogSubtitleAndParagraph
  extends Entry<IBlogSubtitleAndParagraphFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogSubtitleAndParagraph";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlogSubtitleParagraphAndImageFields {
  /** Subtitle */
  subtitle?: string | undefined;

  /** Paragraph */
  paragraph?: Document | undefined;

  /** Assets */
  assets?: Asset[] | undefined;

  /** image caption */
  imageCaption?: string | undefined;
}

/** This is a chunk of page with a title, a paragraph and one or more images (Assets) */

export interface IBlogSubtitleParagraphAndImage
  extends Entry<IBlogSubtitleParagraphAndImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogSubtitleParagraphAndImage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IFuehrerscheinReusableFields {
  /** Title */
  title: string;

  /** Subtitle */
  subtitle?: string | undefined;

  /** Page Body */
  pageBody?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** This content model will hold the info for every page within the site (Wohnungssuche, Führerschein, etc) */

export interface IFuehrerscheinReusable
  extends Entry<IFuehrerscheinReusableFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "fuehrerscheinReusable";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IHomeIconFields {
  /** Title */
  title: string;

  /** Subtitle */
  subtitle: string;

  /** SVGFileName */
  svgFileName: string;

  /** pageLinkRef */
  pageLinkRef?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** extraData */
  extraData?: string | undefined;

  /** width (pixels) */
  width?: number | undefined;

  /** height (pixels) */
  heightPixels?: number | undefined;
}

/** This is an Icon entry for the home page. It has the image, title, subtitle and extras that would be passed to the page to which it redirects. */

export interface IHomeIcon extends Entry<IHomeIconFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "homeIcon";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IHomeIconResuableFields {
  /** homeIconComponent */
  homeIconComponent: Entry<{ [fieldId: string]: unknown }>[];

  /** Last Modified */
  lastModified?: string | undefined;

  /** Author */
  author?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** Draft to see if we can re-use homeIcon contentType */

export interface IHomeIconResuable extends Entry<IHomeIconResuableFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "homeIconResuable";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILinkWithReferenceFields {
  /** reference */
  reference: number;

  /** link url string */
  linkUrlString: Document;

  /** text to display */
  textToDisplay?: string | undefined;
}

/** This is a Link to be referenced on the text */

export interface ILinkWithReference extends Entry<ILinkWithReferenceFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "linkWithReference";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IListWithOrWithoutSubtitleFields {
  /** Subtitle */
  subtitle?: string | undefined;

  /** List */
  list: Document;

  /** isOrderedList */
  isOrderedList: boolean;
}

/** This is a component for the page's content (text) in which things are listed either order or unordered */

export interface IListWithOrWithoutSubtitle
  extends Entry<IListWithOrWithoutSubtitleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "listWithOrWithoutSubtitle";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IMarginGeneratorFields {
  /** margin/padding */
  marginpadding?: number | undefined;

  /** isHrTag */
  isHrTag?: boolean | undefined;
}

/** a content separator for the pages with info */

export interface IMarginGenerator extends Entry<IMarginGeneratorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "marginGenerator";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IOnlyParagraphFields {
  /** body */
  body?: Document | undefined;
}

export interface IOnlyParagraph extends Entry<IOnlyParagraphFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "onlyParagraph";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProductoLatinoFields {
  /** Title */
  title: string;

  /** Address */
  address?: string | undefined;

  /** coordenadas */
  coordenadas?: { lat: number; lon: number } | undefined;

  /** Google Maps Link */
  googleMapsLink?: string | undefined;

  /** Web Site */
  webSite?: string | undefined;

  /** Opening hours */
  openingHours?: string | undefined;
}

/** Shop Element within the Productos Latinos Page */

export interface IProductoLatino extends Entry<IProductoLatinoFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "productoLatino";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProductoLatinoReusableFields {
  /** Productos Latino Title */
  productosLatinoTitle?: string | undefined;

  /** Subtitle */
  subtitle?: string | undefined;

  /** Producto Latino List */
  productoLatinoList: Entry<{ [fieldId: string]: unknown }>[];

  /** Last Modified */
  lastModified?: string | undefined;

  /** author */
  author?: Entry<{ [fieldId: string]: unknown }>[] | undefined;
}

/** This is a list of productos latinos for the page with that name */

export interface IProductoLatinoReusable
  extends Entry<IProductoLatinoReusableFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "productoLatinoReusable";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITitleWithOrWithoutSubtitleFields {
  /** Title Name */
  titleName: string;

  /** subtitle */
  subtitle?: string | undefined;
}

export interface ITitleWithOrWithoutSubtitle
  extends Entry<ITitleWithOrWithoutSubtitleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "titleWithOrWithoutSubtitle";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "blogSubtitleAndParagraph"
  | "blogSubtitleParagraphAndImage"
  | "fuehrerscheinReusable"
  | "homeIcon"
  | "homeIconResuable"
  | "linkWithReference"
  | "listWithOrWithoutSubtitle"
  | "marginGenerator"
  | "onlyParagraph"
  | "productoLatino"
  | "productoLatinoReusable"
  | "titleWithOrWithoutSubtitle";

export type IEntry =
  | IBlogSubtitleAndParagraph
  | IBlogSubtitleParagraphAndImage
  | IFuehrerscheinReusable
  | IHomeIcon
  | IHomeIconResuable
  | ILinkWithReference
  | IListWithOrWithoutSubtitle
  | IMarginGenerator
  | IOnlyParagraph
  | IProductoLatino
  | IProductoLatinoReusable
  | ITitleWithOrWithoutSubtitle;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
