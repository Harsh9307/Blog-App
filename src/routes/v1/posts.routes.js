const express = require('express');
const { postController } = require('../../controllers');

const postRouter = express.Router();

//postController.get('/:id', postController.getPost);
postRouter.post('/', postController.createPost);
