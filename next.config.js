const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — required for GitHub Pages (no Node server there)
  output: "export",
  // Served from gicklatt.github.io/chesspawngame — must match the repo name
  basePath: "/chesspawngame",
  // Emits /privacy/index.html so GitHub Pages resolves clean URLs
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
