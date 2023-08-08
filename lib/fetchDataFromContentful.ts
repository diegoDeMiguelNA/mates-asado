import { client } from "./apiClient"


export async function getContentFulData(contentType: string) {
    const res = await client.getEntries({
      content_type: contentType,
    })
    
    return res;
  }
