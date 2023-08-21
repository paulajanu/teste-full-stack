import express from 'express';
import cors from 'cors';
import postRoute from './router/postRoute.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/posts', postRoute);

app.get('/', (_req, res) => (
  res.send()
));

export default app;
