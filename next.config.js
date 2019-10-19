const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  webpack(config) {
    config.node = {
      fs: "empty",
    };

    return config;
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/supermonkey" : "",
  exportPathMap: async function(defaultPathMap) {
    return {
      "/": { page: "/" },
    };
  },
});
