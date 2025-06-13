// Entry to backend/api
// not using common js instead using es modules

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8080;// cant use port 5000 like video because of ControlCe

const app = express();

app.get('/', (req,res) => res.send('Server is ready'));

app.listen(port,() => console.log(`Server started on port: ${port}`));


// test push 