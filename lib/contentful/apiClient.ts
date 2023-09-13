import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error("Space or Access Token is missing in environment variables.");
}

export const client = createClient({
  space,
  accessToken,
});