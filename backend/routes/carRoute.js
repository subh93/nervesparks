import express from 'express'
import { addCarController,showCarsController } from '../controller/carController.js';

const carRouter = express();

carRouter.post("/addCar", addCarController);
carRouter.post("/showCar", showCarsController);

export { carRouter }