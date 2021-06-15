import * as Environment from '~/common/environment';
import * as Strings from '~/common/strings';

import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

const app = next({
  dev: !Environment.IS_PRODUCTION,
  dir: __dirname,
  quiet: false,
});

const handler = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  server.use(cors());
  server.use(bodyParser.json({ limit: '10mb' }));
  server.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  if (Environment.IS_PRODUCTION) {
    server.use(compression());
  }

  server.use('/public', express.static('public'));

  server.get('/', async (r, s) => {
    const response = await fetch('https://space-race-slingshot-phase2.s3.amazonaws.com/prod/unfiltered_basic_stats.json');
    const json = await response.json();
    const query = { epoch: json.epoch, ...json.payload };
    return app.render(r, s, '/', query);
  });

  server.all('*', async (r, s) => handler(r, s, r.url));

  server.listen(Environment.PORT, async (e) => {
    if (e) throw e;

    console.log(`[ http://storage.filecoin.io/ ] client: http://localhost:${Environment.PORT}`);
  });
});
