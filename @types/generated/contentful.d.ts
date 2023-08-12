// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IPageTemplateFields {
  /** Title */
  title: string;

  /** subtitle */
  subtitle?: string | undefined;

  /** lastUpdate */
  lastUpdate: string;

  /** publicationBody */
  publicationBody: Document;

  /** publicationBodyOne */
  publicationBodyOne?: Document | undefined;

  /** publicationBodyTwo */
  publicationBodyTwo?: Document | undefined;

  /** publicationBodyThree */
  publicationBodyThree?: Document | undefined;
}

export interface IEntryCommonFields {
  contentTypeId: string;
}


export interface IPageTemplate extends Entry<IPageTemplateFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "content_type_id";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type NewIPageTemplate = IPageTemplate & { contentTypeId: string }
export interface IProductosLatinosShopFields {
  /** Titulo */
  titulo: string;

  /** direccion */
  direccion?: string | undefined;

  /** coordenadas */
  coordenadas?: { lat: number; lon: number } | undefined;

  /** sitioWeb */
  sitioWeb?: string | undefined;

  /** horarios */
  horarios?: string | undefined;
}

export interface IProductosLatinosShop
  extends Entry<IProductosLatinosShopFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "productosLatinosShop";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "pageTemplate" | "productosLatinosShop";

export type IEntry = IPageTemplate | IProductosLatinosShop;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";

 export type ExtendedIEntry = IEntry & { entry_id: string };
