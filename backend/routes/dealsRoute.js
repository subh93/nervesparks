import express from 'express'
import { addDealsController, showDealsController } from '../controller/dealsController.js';

const dealRouter = express();

dealRouter.post("/addDeals", addDealsController);
dealRouter.post("/showDeals", showDealsController);

export { dealRouter }