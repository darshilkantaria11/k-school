import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

const emailTemplatePath = path.join(process.cwd(), 'emailTemplateEnquire.html');

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
  const { parentName, email, mobileNumber, selectedPrograms, message } = await req.json();

  // Validate input
  if (!parentName || !email || !mobileNumber || selectedPrograms.length === 0 || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Create the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.PASSWORD, 
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
      programs: selectedPrograms.join(', '), // Combine selected programs into a string
      message,
    };
    const personalizedHtml = template(replacements);

    const mailOptions = {
      from: 'darshilkantaria11@gmail.com',
      to: 'knottindaycarecentre@gmail.com', // Replace with the recipient email
      subject: 'New Enquiry Received',
      html: personalizedHtml,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Enquiry sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
