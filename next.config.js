/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ACCESS_TOKEN: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    NEXT_PUBLIC_SPACE: process.env.NEXT_PUBLIC_SPACE,
    NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT:
      process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
    NEXT_PUBLIC_ACCESS_TOKEN_TYPESCRIPT:
      process.env.NEXT_PUBLIC_ACCESS_TOKEN_TYPESCRIPT,
  },
  generateMetadata: {
    metadataBase: 'https://www.mates-asado.de',
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
