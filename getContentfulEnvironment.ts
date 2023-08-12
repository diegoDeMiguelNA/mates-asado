require('dotenv').config();
const contentfulManagement = require('contentful-management');

const {
  CONTENTFUL_SPACE,
  CONTENTFUL_ACCESS_TOKEN_TYPESCRIPT
} = process.env;

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken:  CONTENTFUL_ACCESS_TOKEN_TYPESCRIPT,
  });

  return contentfulClient
    .getSpace("wdwnckov7fnq")
    .then((space: { getEnvironment: (arg0: string | undefined) => any; }) => space.getEnvironment("master"));
};
