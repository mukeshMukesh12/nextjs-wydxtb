// server.js
const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");
const Agora = require("agora-access-token");

const devProxy = {
  "/moro/public/api/user": {
    target: "http://algorithm.demo.carmartapp.com",
    changeOrigin: true,
    secure: true,
  },
};

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (dev && devProxy) {
      Object.keys(devProxy).forEach(function (context) {
        server.use(createProxyMiddleware(context, devProxy[context]));
      });
    }

    server.all("*", (req, res) => {
      handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });

    server.post("/rtctoken", (req, res) => {
      const appID = "29ee422fd0594cdba1998cebfdd8ed94";
      const appCertificate = "272dba9a85314807a0a47f2672ad671f";
      const expirationTimeInSeconds = 3600;
      const uid = Math.floor(Math.random() * 100000);
      const role = req.body.isPublisher
        ? Agora.RtcRole.PUBLISHER
        : Agora.RtcRole.SUBSCRIBER;
      const channel = req.body.channel;
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const expirationTimestamp = currentTimestamp + expirationTimeInSeconds;
      const token = Agora.RtcTokenBuilder.buildTokenWithUid(
        appID,
        appCertificate,
        channel,
        uid,
        role,
        expirationTimestamp
      );
      res.send({ uid, token });
    });
  })
  .catch((err) => {
    console.log("An error occurred, unable to start the server");
    console.log(err);
  });
