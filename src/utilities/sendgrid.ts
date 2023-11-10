import sgMail, { MailDataRequired } from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();

export class SendGrid {
  private static instance: SendGrid;
  private static apiKey = process.env.API_KEY_SEND_GRID || '';
  private static from = process.env.FROM_SEND_GRID || '';

  private constructor() {
    sgMail.setApiKey(SendGrid.apiKey);
  }

  public static getInstance(): SendGrid {
    if (!SendGrid.instance) {
      SendGrid.instance = new SendGrid();
    }
    return SendGrid.instance;
  }

  public async sendMail(
    to: string[],
    templateId: string,
    dynamicTemplateData: Object
  ) {
    try {
      const msg: MailDataRequired = {
        from: SendGrid.from,
        to,
        templateId,
        dynamicTemplateData
      };

      await sgMail.send(msg);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
