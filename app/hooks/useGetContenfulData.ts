import { useEffect, useState } from "react";

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
interface ContentfulData {
  uri?: string;
}

interface ContentfulEntry {
  data: ContentfulData;
  content: ContentfulNode[];
  nodeType: string;
}

interface ContentfulNode {
  data: ContentfulData;
  marks: any[];
  value: string;
  nodeType: string;
}
export interface ApiResponse {
  title: string;
  subtitle: string;
  lastUpdate: string;
  publicationBody: ContentfulEntry;
  publicationBodyOne: ContentfulEntry;
  publicationBodyTwo: ContentfulEntry;
  publicationBodyThree: ContentfulEntry;
}


const useGetContentfulData = (content_type: string) => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getContentfulData = async () => {
      try {
        const response = await client.getEntries({
          content_type: content_type,
        });
        return response;
      } catch (error) {
        throw error;
      }
    };

    getContentfulData()
      .then((items) => {
        setLoading(false);
        const parsedData = Object.entries(items).map(([key, value]) => {
          if (key === "items") {
            const itemFields = value[0].fields as ApiResponse;
            return itemFields;
          }
          return null;
        }) as ApiResponse[];
        setData(parsedData.filter((item) => item !== null));
      })
      .catch((error) => {
        setError(error);
        console.log("There is an error fetching data:", error);
      });
  }, [content_type]);

  return { data, error, loading };
};

export default useGetContentfulData;
