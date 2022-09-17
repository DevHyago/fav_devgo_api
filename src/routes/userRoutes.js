import { Router } from 'express';
import UserController from '../controllers/UserController.js'
const userRouter = Router();

const userController = new UserController();

userRouter.post('/user', userController.create);
userRouter.put('/user/:id', userController.update);

export default userRouter;