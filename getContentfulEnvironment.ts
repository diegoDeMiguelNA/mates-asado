/* eslint-disable import/no-extraneous-dependencies */
require("dotenv").config();
const contentfulManagement = require("contentful-management");
require("dotenv").config({ path: `${__dirname}/.env.local` });

const { CONTENTFUL_SPACE, CONTENTFUL_ACCESS_TOKEN_TYPESCRIPT } = process.env;

// eslint-disable-next-line func-names
module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_ACCESS_TOKEN_TYPESCRIPT,
  });

  return contentfulClient
    .getSpace(CONTENTFUL_SPACE)
    .then((space: { getEnvironment: (arg0: string | undefined) => never }) =>
      space.getEnvironment("master"),
    );
};
