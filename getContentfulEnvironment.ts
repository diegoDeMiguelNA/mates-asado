require('dotenv').config();
const contentfulManagement = require('contentful-management');

const {
  NEXT_PUBLIC_ACCESS_TOKEN,
  NEXT_PUBLIC_SPACE,
  NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
  NEXT_PUBLIC_ACCESS_TOKEN_TYPESCRIPT
} = process.env;

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: NEXT_PUBLIC_ACCESS_TOKEN_TYPESCRIPT,
  });

  return contentfulClient
    .getSpace(NEXT_PUBLIC_SPACE)
    .then((space: { getEnvironment: (arg0: string | undefined) => any; }) => space.getEnvironment('master'));
};
