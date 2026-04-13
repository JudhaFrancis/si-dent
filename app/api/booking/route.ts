import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, mobile, email, message } = data;

    // 1. Configure SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS?.replace(/"/g, ''), // Remove quotes if present
      },
    });

    // 2. Generate Reference ID
    const refId = Math.random().toString(36).substring(7).toUpperCase();
    const subject = `New Appointment Booking - ${name}`;

    // 3. Determine Recipient
    const recipient = process.env.APP_ENV === 'development'
      ? process.env.TEST_EMAIL
      : process.env.ADMIN_EMAIL;

    // 4. Construct Email Body (Matching your professional PHP template)
    const htmlBody = `
      <div style='background-color: #f3fbf7; padding: 40px 20px; font-family: "Segoe UI", Helvetica, Arial, sans-serif;'>
          <div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #e1eee7;'>
              
              <!-- Header -->
              <div style='background-color: #10b981; padding: 30px; text-align: center;'>
                  <h1 style='color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;'>SI-DENT CLINIC</h1>
              </div>

              <!-- Body Content -->
              <div style='padding: 40px;'>
                  <h2 style='color: #064e3b; margin-top: 0; font-size: 20px;'>New Appointment Request</h2>
                  <p style='color: #4b5563; line-height: 1.6; font-size: 15px;'>Hello Admin,<br>A new patient has submitted a booking request via the website. Below are the details:</p>
                  
                  <!-- Details Table -->
                  <table style='width: 100%; border-collapse: separate; border-spacing: 0; margin-top: 25px; background-color: #f9fafb; border-radius: 12px; border: 1px solid #f3f4f6;'>
                      <tr>
                          <td style='padding: 15px 20px; font-weight: bold; color: #374151; width: 35%; border-bottom: 1px solid #f3f4f6;'>Full Name</td>
                          <td style='padding: 15px 20px; color: #4b5563; border-bottom: 1px solid #f3f4f6;'>${name || 'N/A'}</td>
                      </tr>
                      <tr>
                          <td style='padding: 15px 20px; font-weight: bold; color: #374151; border-bottom: 1px solid #f3f4f6;'>Mobile Number</td>
                          <td style='padding: 15px 20px; color: #4b5563; border-bottom: 1px solid #f3f4f6;'>${mobile || 'N/A'}</td>
                      </tr>
                      <tr>
                          <td style='padding: 15px 20px; font-weight: bold; color: #374151; border-bottom: 1px solid #f3f4f6;'>Email Address</td>
                          <td style='padding: 15px 20px; color: #4b5563; border-bottom: 1px solid #f3f4f6;'>${email || 'N/A'}</td>
                      </tr>
                      <tr>
                          <td style='padding: 15px 20px; font-weight: bold; color: #374151; vertical-align: top;'>Message</td>
                          <td style='padding: 15px 20px; color: #4b5563; line-height: 1.5;'>${(message || 'N/A').replace(/\n/g, '<br>')}</td>
                      </tr>
                  </table>
              </div>

              <!-- Footer -->
              <div style='background-color: #f9fafb; padding: 25px; text-align: center; border-top: 1px solid #f3f4f6;'>
                  <p style='color: #10b981; font-weight: bold; margin: 0; font-size: 14px;'>SI-DENT Clinic Team</p>
              </div>
          </div>
      </div>
    `;

    // 5. Send Mail
    await transporter.sendMail({
      from: `"SI-DENT Clinic" <${process.env.SMTP_USER}>`,
      to: recipient,
      subject: subject,
      html: htmlBody,
    });

    return NextResponse.json({ status: 'success', message: 'Booking email sent successfully' });
  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
