// src/app/api/send/route.js
import nodemailer from "nodemailer";
import { Resend } from "resend";

// Ensure this route runs on the Node.js runtime (not Edge), required for nodemailer
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;
    const resendApiKey = process.env.RESEND_API_KEY;

    // If Resend is configured, prefer it (reliable on serverless platforms)
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const fromAddress = gmailUser ? `Portfolio Contact <${gmailUser}>` : "onboarding@resend.dev";
        await resend.emails.send({
          from: fromAddress,
          to: gmailUser || email, // if no inbox configured, send back to sender as fallback
          reply_to: email,
          subject,
          text: `From: ${email}\n\n${message}`,
        });
        return new Response(
          JSON.stringify({ success: true, message: "Email sent successfully (Resend)" }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      } catch (resendErr) {
        console.error("Resend send error:", resendErr);
        // Fall through to nodemailer as a backup
      }
    }

    // Validate required env vars for SMTP path
    if (!gmailUser || !gmailPass) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            "Email service is not configured. Provide RESEND_API_KEY or GMAIL_USER and GMAIL_PASS.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465, false for 587
      auth: {
        user: gmailUser, // your Gmail address
        pass: gmailPass, // your Gmail App Password (not your account password)
      },
    });

    // Optional: verify connection configuration for clearer errors
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("Nodemailer verify failed:", verifyError);
      return new Response(
        JSON.stringify({
          success: false,
          error:
            "Email service verification failed. Check Gmail App Password, 2FA, and allow SMTP.",
          details: verifyError?.message,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Setup email options
    const mailOptions = {
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: gmailUser, // send to your inbox
      replyTo: email, // so you can reply directly to sender
      subject,
      text: `From: ${email}\n\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
