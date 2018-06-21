const bodyParser = require('koa-bodyparser');
const convert = require('koa-convert');
const cors = require('kcors');
const json = require('koa-json');
const Koa = require('koa');
const logger = require('koa-logger');
const session = require('koa-generic-session');
const mongoose = require('mongoose');

const config = require('../config');
const middleware = require('../middleware');

const Helper = require('../helpers');
const Service = require('../services');
const ApiRoutes = require('../routers');

// mongoose.Promise = global.Promise;
// mongoose.connect(config.database);
// mongoose.connection
//     .on('error', (error) => console.error(error))
//     .on('close', () => console.info('Database connection closed.'))
//     .on('open', () => {
//         console.log(`🍺   DB ${config.database} connected !`);
//     });

const app = new Koa();
app.keys = [config.session];
app.use(bodyParser());

try {
    app.use(async (ctx, next) => {
            ctx.helper = Helper;
            ctx.service = Service;
            const start = new Date();
            await next();
            const ms = new Date() - start;
            console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
        })
        .use(convert(logger()))
        .use(session())
        .use(cors())
        .use(json())
        .use(middleware())
        .use(ApiRoutes.routes())
        .use(ApiRoutes.allowedMethods());
} catch (e) {
    console.log('start server failed => ', e);
}

app.listen(config.port, () => {
    console.log(`🔔   Server started on ${config.port}`)
})

app.on('error', function(err, ctx) {
    console.log(err)
});

process.on('unhandledRejection', function(err, promise) {
    console.error('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
});

exports = module.exports = app;