import nodemailer from "nodemailer"
import dotenv from "dotenv"
import dns from "dns"

// This forces Node to use IPv4 instead of IPv6. Google's IPv6 SMTP is blocked 
// on many ISPs, which causes the exact ECONNREFUSED crash you are seeing!
dns.setDefaultResultOrder('ipv4first')
dotenv.config()

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});


const sendMail = async (to, otp) => {
  try {
    // We MUST use `await`. If we don't, the mail error happens in the background
    // and completely crashes the Node server (Unhandled Promise Rejection).
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: to,
      subject: "Reset Your Password",
      html: `<p>Your OTP for Password Reset is <b>${otp}</b>.
        It expires in 5 minutes.</p>`
    });
  } catch (error) {
    console.error("Failed to send email:", error);
    // Passing the error back instead of letting it secretly crash Node
    throw error; 
  }
}

export default sendMail