const express = require('express');

const postRouter = require('./posts.routes');

const v1Router = express.Router();

v1Router.use('/posts', postRouter);

module.exports = v1Router;
