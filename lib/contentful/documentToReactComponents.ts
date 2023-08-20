import { Document } from "@contentful/rich-text-types";
import { Options, documentToReactComponents as originalDTRC } from "@contentful/rich-text-react-renderer";

export const documentToReactComponents = (document: Document, options: Options | undefined) => {
  return originalDTRC(document, options);
};
