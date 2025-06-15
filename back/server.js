// Entry to backend/api
// not using common js instead using es modules

import express from 'express';
import dotenv, { config } from 'dotenv';
import userRoutes from './routes/user-routes.js';
import { notFound,errorHandler } from './middleware/error-middleware.js';
import connectDB from './config/db.js';
 
dotenv.config();

connectDB();

const app = express();

const port = process.env.PORT || 8080;// cant use port 5000 like video because of ControlCe

app.use('/api/users', userRoutes);

app.get('/', (req,res) => res.send('Server is ready'));

app.use(notFound); 
app.use(errorHandler); 

app.listen(port,() => console.log(`Server started on port: ${port}`));


// test push 6/14 