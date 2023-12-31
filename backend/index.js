import express from 'express'
import bodyParser from "body-parser";
import 'dotenv/config'
import cors from "cors";
import { userRouter } from './routes/userRoute.js';
import { dealerRouter } from './routes/dealershipRoute.js';
import { adminRouter } from './routes/adminRoute.js';
import { carRouter } from './routes/carRoute.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Server Working");
})

app.use("/nervesparks/project1/user", userRouter)
app.use("/nervesparks/project1/dealer", dealerRouter)
app.use("/nervesparks/project1/admin", adminRouter)
app.use("/nervesparks/project1/car", carRouter)



app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})