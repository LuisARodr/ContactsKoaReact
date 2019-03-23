'use strict'

const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body')
const Router = require('koa-router')

const contactControllers = require('../controllers/contact')

const router = new Router();

//router
router.get('/contact', contactControllers.getContacts)
router.get('/contact/:contactId',contactControllers.getContact)
router.post('/contact', contactControllers.saveContact)
router.put('/contact/:contactId',contactControllers.updateContact)
router.delete('/contact/:contactId',contactControllers.deleteContact)

module.exports = router