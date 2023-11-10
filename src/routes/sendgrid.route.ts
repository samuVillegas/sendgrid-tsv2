import { Router, Request, Response } from 'express';
import { sendEmail } from '../controllers/sendgrid.controller';
const sendgrid = Router();

sendgrid.post('/send_email', sendEmail);

export default sendgrid;
