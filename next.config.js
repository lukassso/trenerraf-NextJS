// require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.datocms-assets.com'],
  },
};

module.exports = {
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
};

module.exports = nextConfig;
