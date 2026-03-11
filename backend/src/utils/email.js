import nodemailer from 'nodemailer';

const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

export async function sendEmail({ to, subject, html, text }) {
  const transporter = createTransporter();
  const from = process.env.EMAIL_FROM || 'no-reply@ems.local';
  const mail = { from, to, subject, html, text };
  return transporter.sendMail(mail);
}


