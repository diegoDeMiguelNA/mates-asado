import {
  Options,
  documentToReactComponents as originalDTRC,
} from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

const documentToReactComponents = (
  document: Document,
  options: Options | undefined,
) => {
  return originalDTRC(document, options);
};

export default documentToReactComponents;
