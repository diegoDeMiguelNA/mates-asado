/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_CONTENTFUL_SPACE_TOKEN: process.env.NEXT_PUBLIC_API_URL,
    }
}

module.exports = nextConfig
