const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/v1", {
      target: "http://15.165.203.215:8080",
      changeOrigin: true,
    })
  );
};