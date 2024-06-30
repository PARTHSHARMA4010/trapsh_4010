import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import authRoutes from './src/routes/auth.js';
import { DB_NAME } from './src/constants.js';

dotenv.config({
  path:'./env'
})

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

;(async () => {
  try {
    console.log(process.env.PORT);
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log('MongoDB connected');

    app.on('error', (error) => {
      console.log('Error : ', error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('ERROR :', error);
    throw error;
  }
})();
