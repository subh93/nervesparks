import express from 'express'
import { signInAdminController } from '../controller/adminController.js';

const adminRouter = express();

adminRouter.post("/signIn", signInAdminController);

export { adminRouter }