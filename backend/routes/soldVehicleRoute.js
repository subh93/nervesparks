import express from 'express'
import { addSoldVehicleController, showSoldVehicleController } from '../controller/soldVehicleController.js';

const soldVehicleRouter = express();

soldVehicleRouter.post("/addSoldVehicle", addSoldVehicleController);
soldVehicleRouter.post("/showSoldVehicle", showSoldVehicleController);

export { soldVehicleRouter }