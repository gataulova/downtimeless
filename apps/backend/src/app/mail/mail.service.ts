import { Injectable } from "@nestjs/common";
import nodemailer from "nodemailer";

@Injectable()
export class MailService {
  transporter = nodemailer.createTransport({
    host: "mailbox.destiny.games",
    port: 465,
    secure: true,
    auth: {
      user: "info@allnodes.com",
      pass: "ko9puloi7Ofukaik"
    }
  });

  constructor() {
    // this.sendConfirmationMail('akhmetovdev@gmail.com');
  }

  async sendConfirmationMail(email: string): Promise<void> {
    const content = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Allnodes.com - Email confirmation</title>
</head>

<body style="margin: 0; padding: 0;">
    <table bgcolor="#eaedef" border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0;" width="100%">
        <tr>
            <td align="center" valign="top">
                <table bgcolor="#eaedef" border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0; max-width: 600px;" width="100%">
                    <tr>
                        <td align="center" valign="center" style="height: 70px;">
                            <a href="https://observer.ru" target="_blank">
                                OBSERVER
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center" valign="top">
                <table bgcolor="#f5f7f8" border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0; max-width: 600px;" width="100%">
                    <tr>
                        <td align="center" valign="center" style="height: 40px;">
                            <span style="color: #7f8fa4; font-size: 12px; font-family: Arial, sans-serif; line-height: 14px; -webkit-text-size-adjust: none; display: block;">
                                This is an automated email, please do not reply
                            </span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center" valign="top">
                <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0; max-width: 600px;" width="100%">
                    <tr>
                        <td align="center" valign="top" style="padding: 60px 0;">
                            <img src="https://www.allnodes.com/img/email/confirm.png" alt="" border="0" width="120" style="display: block;" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="top">
                            <b style="color: #354052; font-size: 24px; font-family: Arial, sans-serif; line-height: 27px; -webkit-text-size-adjust: none; display: block;">
                                Please Confirm your Email
                            </b>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="top" style="padding-top: 20px; padding-bottom: 30px;">
                            <span style="margin-bottom: 5px; color: #7f8fa4; font-size: 14px; font-family: Arial, sans-serif; line-height: 16px; -webkit-text-size-adjust: none; display: block;">
                                Thank you for your interest in OBSERVER.
                            </span>
                            <span style="margin-bottom: 5px; color: #7f8fa4; font-size: 14px; font-family: Arial, sans-serif; line-height: 16px; -webkit-text-size-adjust: none; display: block;">
                                You have 24 hours to confirm this email address.
                            </span>
                            <span style="color: #7f8fa4; font-size: 14px; font-family: Arial, sans-serif; line-height: 16px; -webkit-text-size-adjust: none; display: block;">
                                Please click the button below to confirm:
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="top" style="padding-bottom: 50px;">
                            <a href="${""}" style="text-decoration: none !important; background-color: #22caba; color: #ffffff; width: 180px; height: 45px; border-radius: 40px; font-size: 14px; font-family: Arial, sans-serif; font-weight: bold; line-height: 45px; -webkit-text-size-adjust:none; display: block; letter-spacing: 2px;"
                                target="_blank">
                                CONFIRM
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="top" style="padding: 0 50px;">
                            <hr style="background-color: #eaedef; height: 1px; width: 100%; border: none; margin: 0;" />
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="top" style="padding: 20px 0;">
                            <span style="color: #7f8fa4; font-size: 14px; font-family: Arial, sans-serif; line-height: 16px; -webkit-text-size-adjust: none; display: block;">
                                For any issues, contact our customer service at:
                                <a href="mailto:support@observer.ru target="_blank" style="color: #567fe9; text-decoration: none !important;">
                                    support@observer.ru
                                </a>
                            </span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center" valign="top">
                <table bgcolor="#f5f7f8" border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0; max-width: 600px;" width="100%">
                    <tr>
                        <td align="center" valign="center" style="width: 20%; height: 60px;">
                            <a href="https://www.allnodes.com/faqs" style="text-decoration: none !important; color: #354052; font-size: 11px; font-family: Arial, sans-serif; font-weight: bold; line-height: 13px; -webkit-text-size-adjust:none; display: block; letter-spacing: 2px;"
                                target="_blank">
                                FAQ
                            </a>
                        </td>
                        <td align="center" valign="center" style="width: 20%; height: 60px;">
                            <a href="https://www.allnodes.com/news" style="text-decoration: none !important; color: #354052; font-size: 11px; font-family: Arial, sans-serif; font-weight: bold; line-height: 13px; -webkit-text-size-adjust:none; display: block; letter-spacing: 2px;"
                                target="_blank">
                                NEWS
                            </a>
                        </td>
                        <td align="center" valign="center" style="width: 20%; height: 60px;">
                            <a href="https://t.me/allnodes" style="text-decoration: none !important; color: #354052; font-size: 11px; font-family: Arial, sans-serif; font-weight: bold; line-height: 13px; -webkit-text-size-adjust:none; display: block; letter-spacing: 2px;"
                                target="_blank">
                                TELEGRAM
                            </a>
                        </td>
                        <td align="center" valign="center" style="width: 20%; height: 60px;">
                            <a href="https://www.facebook.com/allnodescom" style="text-decoration: none !important; color: #354052; font-size: 11px; font-family: Arial, sans-serif; font-weight: bold; line-height: 13px; -webkit-text-size-adjust:none; display: block; letter-spacing: 2px;"
                                target="_blank">
                                FACEBOOK
                            </a>
                        </td>
                        <td align="center" valign="center" style="width: 20%; height: 60px;">
                            <a href="https://twitter.com/AllNodescom" style="text-decoration: none !important; color: #354052; font-size: 11px; font-family: Arial, sans-serif; font-weight: bold; line-height: 13px; -webkit-text-size-adjust:none; display: block; letter-spacing: 2px;"
                                target="_blank">
                                TWITTER
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center" valign="top">
                <table bgcolor="#eaedef" border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0; max-width: 600px;" width="100%">
                    <td align="left" valign="center" style="height: 75px;">
                        <span style="color: #7f8fa4; font-size: 12px; font-family: Arial, sans-serif; line-height: 14px; -webkit-text-size-adjust: none; display: block;">
                            &copy; 2019 OBSERVER
                        </span>
                    </td>
                    <td align="right" valign="center" style="height: 75px;">
                        <a href="https://www.allnodes.com/terms" style="text-decoration: none !important; color: #7f8fa4; font-size: 12px; font-family: Arial, sans-serif; line-height: 14px; -webkit-text-size-adjust:none;"
                            target="_blank">
                            Terms and conditions
                        </a>
                        <span style="margin: 0 5px; color: #7f8fa4; font-size: 12px; font-family: Arial, sans-serif; line-height: 14px; -webkit-text-size-adjust:none;">
                            /
                        </span>
                        <a href="https://www.allnodes.com/special" style="text-decoration: none !important; color: #7f8fa4; font-size: 12px; font-family: Arial, sans-serif; line-height: 14px; -webkit-text-size-adjust:none;"
                            target="_blank">
                            Special
                        </a>
                        <span style="margin: 0 5px; color: #7f8fa4; font-size: 12px; font-family: Arial, sans-serif; line-height: 14px; -webkit-text-size-adjust:none;">
                            /
                        </span>
                        <a href="https://www.allnodes.com/privacy" style="text-decoration: none !important; color: #7f8fa4; font-size: 12px; font-family: Arial, sans-serif; line-height: 14px; -webkit-text-size-adjust:none;"
                            target="_blank">
                            Privacy policy
                        </a>
                    </td>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
  `;

    return this.sendMailWithContent(email, content);
  }

  async sendMailWithContent(email: string, content: string): Promise<void> {
    const options: any = {
      from: `"OBSERVER" <noreply@observer.ru>`,
      to: email,
      subject: "OBSERVER - Email Confirmation",
      html: content
    };

    return new Promise((resolve, reject) => {
      resolve(
        this.transporter.sendMail(options, (err, info) =>
          console.log(err, info)
        )
      );
    });
  }
}
