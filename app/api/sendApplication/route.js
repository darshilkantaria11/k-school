// pages/api/sendApplication.js

import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

const emailTemplatePath = path.join(process.cwd(), 'emailTemplate.html');

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
  const { firstName, lastName, mobileNumber, email, role, availability, message, resume } = await req.json();

  // Validate input
  if (!firstName || !lastName || !mobileNumber || !email || !role) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Create the transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
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
      name: `${firstName} ${lastName}`,
      mobileNumber,
      email,
      role,
      availability,
      message,
      resume
    };
    const personalizedHtml = template(replacements);

    const mailOptions = {
      from: `"Knottin Website" <${process.env.EMAIL}>`, // Sender address
      to: 'knottin_schoolcare@live.com', // Replace with the owner's email address
      subject: 'New Job Application Received',
      html: personalizedHtml,
      attachments: [
        {
          filename: resume.name,
          content: Buffer.from(resume.data, 'base64'),
          contentType: resume.type
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Application sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET request handler is removed since we are not storing emails anymore.
