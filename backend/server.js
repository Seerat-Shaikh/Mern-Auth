import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errHandler } from './middleware/errorMiddleware.js';
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000; //look for process.env otherwise go with Port 5000
import userRoutes from './routes/userRoutes.js';

connectDB();

const app = express();

app.use(express.json()); // Allow us to pas raw json
app.use(express.urlencoded({ extended: true })) //Allow us to pass form data

app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errHandler);

app.listen(port, () => console.log(`Server Started on port ${port}`));

