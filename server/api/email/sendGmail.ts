// // import { EmailTemplate } from './types/emailTypes'
// import { useMailer } from '#mailer'
//
// type SendMail = {
//     template: string, to: string, from: string, subject: string
// }
//
// export async function sendGmail(request: SendMail) {
//     const mailService = useMailer();
//     const gmailTransporter = mailService.gmailTransporter();
//
//     return await mailService.sendMail({
//         requestId: 'join-waitlist',
//         options: {
//             to: request.to,
//             subject: request.subject,
//             text: request.template,
//             html: request.template
//         },
//         transporter: gmailTransporter
//     });
// }