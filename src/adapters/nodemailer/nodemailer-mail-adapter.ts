import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ebae1d401ccb4a",
      pass: "eef3dc46b20a8d"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendMailData) {
       await transport.sendMail({
            from: 'Equipe feedget <nlw@feedget.com>',
            to: 'Clara <clarxyg@gmail.com>',
            subject,
            html: body,
        })
    
   }
}