/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Set assetPrefix and basePath for GitHub Pages
  assetPrefix: process.env.GITHUB_PAGES ? "/next-weather-app/" : "",
  basePath: process.env.GITHUB_PAGES ? "/next-weather-app" : "",
};

module.exports = nextConfig;
