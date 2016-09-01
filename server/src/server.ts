import * as Koa from 'koa'
import * as logger from 'koa-logger'
import api from './api'
import {initializeQneCore, QneCore} from 'qne-core';

const config = {
  port: 3000,
  debug: true
};

/**
 * setup Koa
 */
const app: Koa = new Koa();

// debugging setup

if (config.debug){
  app.use(logger());
}

// add server API
//api(config, app);

// listen
app.listen(config.port);
console.log('listening on port ' + config.port);
