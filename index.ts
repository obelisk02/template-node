import express, { Express, Request,Response } from "express";
import dotenv from 'dotenv';


dotenv.config();

//Express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;


app.get('/', (req:Request, res: Response) =>{
    res.send (" typescript1")
})


app.listen ( port , ()=>{
    console.log(`Server listening on port ${port}`);
})