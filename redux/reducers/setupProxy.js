const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  console.log("form setupProxy.js");
  app.use(
    proxy("/moro/public/api", {
      target: "https://smartgroup-demo.com",
      secure: false,
      changeOrigin: true,
    })
  );
};
