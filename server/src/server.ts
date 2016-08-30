import * as Koa from "koa"
import * as Logger from "koa-logger"

const config = {
  port: 3000,
  debug: true
};

/**
 * setup Koa
 */
const app = new Koa();

// debugging setup

if (config.debug){
  //app.use(new Logger());
}

// add server API

//require('./api.js')(config, app);

// listen
app.listen(config.port);
console.log('listening on port ' + config.port);