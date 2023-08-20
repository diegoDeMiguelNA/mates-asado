import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_SPACE;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error("Space or Access Token is missing in environment variables.");
}

export const client = createClient({
  space,
  accessToken,
});