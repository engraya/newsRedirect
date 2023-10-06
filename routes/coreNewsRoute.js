const express = require('express');
const coreNewsRouter = express.Router();
const axios = require('axios');
const controller = require('../controllers/newsController')


coreNewsRouter.get('', controller.getAllNewsController)

coreNewsRouter.post('', controller.searchNewsController)


module.exports = coreNewsRouter