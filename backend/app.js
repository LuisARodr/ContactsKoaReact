'use strict'
//imports
const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body')
const json = require("koa-json");
const api = require('./routes')

//define constants
const app = new Koa();


//seting up Koa
app.use(bodyParser());
app.use(json());


app.use(api.routes()).use(api.allowedMethods());
app.use(require('koa-static')('./build'))

module.exports = app