// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";

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

export type CONTENT_TYPE =
  | "homeIcon"
  | "homeIconResuable"
  | "productoLatino"
  | "productoLatinoReusable";

export type IEntry =
  | IHomeIcon
  | IHomeIconResuable
  | IProductoLatino
  | IProductoLatinoReusable;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
