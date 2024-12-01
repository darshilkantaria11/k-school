import { google } from "googleapis";
import { Readable } from "stream";
import path from "path";

const SCOPES = ["https://www.googleapis.com/auth/drive.file"];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { file, fileName } = req.body;

  if (!file || !fileName) {
    return res.status(400).json({ message: "Missing file or file name" });
  }

  try {
    const keyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH;

    const auth = new google.auth.GoogleAuth({
      keyFile: path.resolve(keyPath), // Securely resolve the file path
      scopes: SCOPES,
    });

    const drive = google.drive({ version: "v3", auth });

    const fileMetadata = { name: fileName };
    const media = {
      mimeType: "application/pdf",
      body: Readable.from(Buffer.from(file, "base64")),
    };

    const response = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });

    const fileId = response.data.id;

    // Generate a public link
    await drive.permissions.create({
      fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    const link = `https://drive.google.com/file/d/${fileId}/view`;

    res.status(200).json({ link });
  } catch (error) {
    console.error("Error uploading to Google Drive:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
