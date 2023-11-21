

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import connectDb  from "./database/db.cjs";
import Routes from './routes/route.js';

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded( {extended : true}));
app.use(cors());
app.use('/', Routes);

const PORT = 8000;


connectDb().then(() =>{
    app.listen(PORT,() => {
        console.log(`Server is running succesfully on port ${PORT}`);
    })
});





