/* eslint-disable no-console */
import { createClient } from 'contentful';
import { useEffect } from 'react';

export const client = createClient({
  space: "wdwnckov7fnq",
  accessToken: "fitunn-HXgMISz9aF9_qQjAIx-rOJ4X1FakgL1GqsSU",
});

const useGetContentfulData = () => {
  useEffect(() => {
    const getContentfulData = async () => {
      const contentfulData = await client?.getEntries({
        content_type: "marianWohnnungssuche",
      });
     
    getContentfulData()
      .then((response) => console.log("response", response))
      .catch(error => {
        console.log('There is no Chart that matches this ID', error);
      });
    } 
},)};

export default useGetContentfulData;