import { IMailProvider , IMessage } from '../IMailProvider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class MailtrapMailProvider implements IMailProvider {

    private transporter: Mail;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: 'b46da5240e73cc',
                pass: '84b4626739ac9'
            }
        })
    }


   async sendMail(message: IMessage): Promise<void>{
    await this.transporter.sendMail({
        to:{
            name: message.from.name,
            address: message.from.email
        },
        from: {
            name: message.from.name,
            address: message.from.email,
        },
        subject: message.subject
    })
   }
}