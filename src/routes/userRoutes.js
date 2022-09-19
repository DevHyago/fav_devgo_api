import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import auth from '../middlewares/auth.js'
const userRouter = Router();

const userController = new UserController();

userRouter.post('/user', userController.create);
userRouter.post('/user/login', userController.auth);
userRouter.put('/user/:id', auth, userController.update);

export default userRouter;