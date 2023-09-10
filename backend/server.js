import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000; //look for process.env otherwise go with Port 5000
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errHandler);

app.listen(port, () => console.log(`Server Started on port ${port}`));

