import express from 'express';
import * as dotenv from 'dotenv'; // to use env variabels
import cors from 'cors';

import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.send({ message: 'hello world' });
});

const startServer = async () => {
  try {
    // connect to the database
    const originalUrl = process.env.MONGODB_URL;

    const url = originalUrl.replace('<password>', process.env.MONGODB_PASSWORD);

    connectDB(url);

    app.listen(8000, () => console.log('server started...'));
  } catch (err) {
    console.log(error);
  }
};

startServer();
