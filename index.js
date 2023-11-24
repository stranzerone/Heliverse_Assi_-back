import express from 'express';
import cors from 'cors';


import bodyParser from 'body-parser';
import {Connect}  from "./Components/Connection/mongodb.js"
import { insertData } from './Components/Controller/dataController.js';
import route from "./Components/Routes/routes.js"
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const URL = process.env.URL
console.log(PORT)
app.use(cors({ origin: ["https://heliverse-front.onrender.com"], credentials: true }));
app.use(bodyParser.json());


Connect(URL)


insertData();




app.use('/', route);

app.listen(PORT,()=>{
    console.log('server is connected')
})