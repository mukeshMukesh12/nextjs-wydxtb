const withImages = require("next-images");
module.exports = {
  trailingSlash: true,
  withVideos: function () {
    require("next-videos");
  },
  a: function () {
    withImages({
      assetPrefix: "https://example.com",
      dynamicAssetPrefix: true,
      webpack(config, options) {
        return config;
      },
    });
  },

  env: {
    API_URL: "http://algorithm.demo.carmartapp.com/morog/public/api/",
  },
};
