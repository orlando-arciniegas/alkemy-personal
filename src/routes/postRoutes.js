import {Router} from 'express';
import postController from '../controllers/postController';
// import authToken from '../middlewares/authToken';
// import uploadFile from '../middlewares/imageMulter.js')

const router = Router();

router.get('/posts', postController.index);

router.post('/posts', postController.save);

router.get('/post/:id', postController.find);

router.put('/post/:id', postController.edit);

router.delete('/post/:id', postController.destroy);

export default router;