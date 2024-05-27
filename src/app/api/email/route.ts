import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, message, interestedIn } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Message from ${name} (${email})`,

    html: `    <html>
           <head>
             <meta charSet="UTF-8" />
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
             <title>Inquiry Email</title>
             <style>
    {
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
                .container {
                  max-width: 600px;
                  margin: 20px auto;
                  padding: 20px;
                  border: 1px solid #ccc;
                  border-radius: 5px;
                }
                h1 {
                  text-align: center;
                }
                p {
                  margin-bottom: 15px;
                }
                .details {
                  background-color: #f9f9f9;
                  padding: 10px;
                  border-radius: 5px;
                }
              }
            </style>
          </head>
          <body>
            <div className="container">
              <h1>Inquiry Received</h1>
              <p>Dear ${name},</p>
              <p>We have received the following inquiry:</p>
              <div className="details">
                <p>
                  <strong>Name:</strong> ${name}
                </p>
                <p>
                  <strong>Email:</strong> ${email}
                </p>
                <p>
                  <strong>Message:</strong> ${message}
                </p>
                <p>
                  <strong>Interested-in:</strong> ${interestedIn}
                </p>
                interested-in
              </div>
              <p>We will get back to the sender as soon as possible.</p>
              <p>
                Best regards,
                <br />
                Sonal Rathod
              </p>
            </div>
          </body>
        </html>`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
