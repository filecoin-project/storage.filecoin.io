import * as Environment from "~/common/environment";

import express from "express";
import next from "next";
import compression from "compression";
import cors from "cors";

const app = next({
  dev: !Environment.IS_PRODUCTION,
  dir: __dirname,
  quiet: false,
});

const handler = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  server.use(cors());

  if (Environment.IS_PRODUCTION) {
    server.use(compression());
  }

  server.all("*", async (r, s) => handler(r, s, r.url));

  server.listen(Environment.PORT, async (e) => {
    if (e) throw e;

    console.log(`[ slate ] client: http://localhost:${Environment.PORT}`);
  });
});
