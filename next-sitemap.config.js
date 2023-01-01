/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://trenerrafal.pl',
  // siteUrl: 'localhost',
  generateRobotsTxt: true, // (optional)
  exclude: ['/404', '/blog.styled', '/sitemap'],
  // ...other options
};
