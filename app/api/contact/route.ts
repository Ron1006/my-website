import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, businessType, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: 'ronpark.liu01@gmail.com',
    replyTo: email,
    subject: `New enquiry from ${name} — ${businessType}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Business Type</td><td style="padding: 8px 0;">${businessType}</td></tr>
        </table>
        <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
        <p style="color: #666;">Message</p>
        <p style="white-space: pre-wrap; color: #333;">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
