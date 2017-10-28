/***
 * index.js - Entrypoint to memory lane's backend
 ***/

/**
 * Module dependencies.
 */
var responseTime   = require('koa-response-time');
var logger         = require('koa-logger');
var compress       = require('koa-compress');
var koa            = require('koa');
var providers      = require('./lib/providers');
var fetchStories   = providers.fetchStories;
var isValidStory   = providers.isValidStory;
var fetchProviders = providers.fetchProviders;

const app = new koa();
const port = 8000;

// logging
app.use(logger());

// x-response-time
app.use(responseTime());

// compress responses
app.use(compress());

// handle requests
app.use(async function (ctx, next) {
    switch (ctx.path) {
        /**
           /stories?lat=39.4&lat=32.7157&lon=117.1611
         **/
    case '/stories':
        console.log("Fetching stories")
        await fetchStories()
            .then(stories => stories.filter(isValidStory))
            .then(filtered_stories => ctx.body = { filtered_stories })
        break;
    }

});

// start server
app.listen(port);
console.log("Frontend Server Started. Listening on port", port);
