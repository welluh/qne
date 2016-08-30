
/* =================== USAGE ===================

    TODO: THIS DOES NOT WORK, CONSTRUCTOR DOES NOT RETURN THE RIGHT KIND OF FUNCTION!

    import * as Logger from "koa-logger";
    var logger = new Logger();

 =============================================== */

/// <reference path="../koa/koa.d.ts" />

declare module "koa-logger" {

    import * as Koa from "koa";
    
    module Logger {

    }

    class Logger {
        /**
         * Create a new logger.
         */
        constructor();
    }
    export = Logger;
}
