import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import sendgrid from './routes/sendgrid.route';

const app = express();

app.use(express.json());

app.use('/sendgrid', sendgrid);

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Welcome to Sendgrid API</h1>');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
