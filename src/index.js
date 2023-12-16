import { app } from './app.js';
import connectDB from './db/index.js';
// require('dotenv').config({ path: './env' });
// require('dotenv').config({ path: './.env' });
import dotenv from 'dotenv';
dotenv.config({
  path: './env',
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is up and running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('MONGO DB ERROR');
  });
