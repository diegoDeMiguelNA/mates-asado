const assert = require("assert").strict;
const contentfulManagement = require("contentful-management");
const EnvironmentGetter = require("contentful-typescript-codegen").EnvironmentGetter;

const { CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT } = process.env

assert(CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN)
assert(CONTENTFUL_SPACE_ID)
assert(CONTENTFUL_ENVIRONMENT)

const getContentfulEnvironment: typeof EnvironmentGetter = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  })

  return contentfulClient
    .getSpace(CONTENTFUL_SPACE_ID)
    .then((space: { getEnvironment: (arg0: string) => any }) => space.getEnvironment(CONTENTFUL_ENVIRONMENT!))
}
export default getContentfulEnvironment;
