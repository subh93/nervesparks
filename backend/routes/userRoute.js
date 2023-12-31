import express from 'express'
import { signInUserController,signUpUserController } from '../controller/userController.js';

const userRouter = express();

userRouter.post("/signIn", signInUserController);
userRouter.post("/signUp", signUpUserController);

export { userRouter }