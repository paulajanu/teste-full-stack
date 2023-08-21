import { Router } from 'express';
import postController from '../controllers/post.controller.js';

const postRoute = Router();

postRoute.get('/', postController.getAllPosts);
postRoute.get('/:id', postController.getPostById);
postRoute.post('/', postController.insertPost);
postRoute.put('/:id', postController.updatePost);
postRoute.delete('/:id', postController.deletePost);

export default postRoute;
