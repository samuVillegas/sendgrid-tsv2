import { Request, Response } from 'express';
import { SendGrid } from '../utilities/sendgrid';

export const sendEmail = async (req: Request, res: Response) => {
  const { to, templateId, dynamicTemplateData } = req.body;
  const sendgrid = SendGrid.getInstance();
  const resultSendEmail = await sendgrid.sendMail(
    to,
    templateId,
    dynamicTemplateData
  );
  if (resultSendEmail) res.send('Email sent successfully');
  else res.send('Error sending email');
};
