import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

const emailTemplatePath = path.join(process.cwd(), 'bookATour.html');

// Function to read the email template
const readEmailTemplate = () => {
  try {
    return fs.readFileSync(emailTemplatePath, 'utf8');
  } catch (error) {
    console.error('Error reading email template file:', error);
    return '';
  }
};

// POST request handler
export async function POST(req) {
  const { parentName, email, mobileNumber, numberOfPeople, date, slot } = await req.json();

  // Validate input
  if (!parentName || !email || !mobileNumber || !numberOfPeople || !date || !slot) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Create the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "@gmail.com", // Use your SMTP user
      pass: "", // Use your SMTP password
    },
  });

  try {
    // Read email template and compile it
    const emailTemplateSource = readEmailTemplate();
    const template = handlebars.compile(emailTemplateSource);

    // Prepare the email content
    const replacements = {
      parentName,
      email,
      mobileNumber,
      numberOfPeople,
      date,
      slot,
    };
    const personalizedHtml = template(replacements);

    const mailOptions = {
      from: '', // Sender address
      to: '', // Replace with the owner's email address
      subject: 'New Tour Booking Received',
      html: personalizedHtml,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Tour booking sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
