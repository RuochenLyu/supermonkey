const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  webpack(config) {
    config.node = {
      fs: "empty",
    };

    return config;
  },
  exportPathMap: async function(defaultPathMap) {
    return {
      "/": { page: "/" },
    };
  },
});
