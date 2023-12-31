import express from 'express'
import { signInDealerController, signUpDealerController } from '../controller/dealershipController.js';

const dealerRouter = express();

dealerRouter.post("/signIn", signInDealerController);
dealerRouter.post("/signUp", signUpDealerController);

export { dealerRouter }