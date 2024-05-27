// // InquiryEmail.js

// import React from "react";

// export function EmailInquiry(props) {
//   return (
//     <html>
//       <head>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Inquiry Email</title>
//         <style>
//           {`
//             body {
//               font-family: Arial, sans-serif;
//               margin: 0;
//               padding: 0;
//             }
//             .container {
//               max-width: 600px;
//               margin: 20px auto;
//               padding: 20px;
//               border: 1px solid #ccc;
//               border-radius: 5px;
//             }
//             h1 {
//               text-align: center;
//             }
//             p {
//               margin-bottom: 15px;
//             }
//             .details {
//               background-color: #f9f9f9;
//               padding: 10px;
//               border-radius: 5px;
//             }
//           `}
//         </style>
//       </head>
//       <body>
//         <div className="container">
//           <h1>Inquiry Received</h1>
//           <p>Dear {name},</p>
//           <p>We have received the following inquiry:</p>
//           <div className="details">
//             <p>
//               <strong>Name:</strong> {name}
//             </p>
//             <p>
//               <strong>Email:</strong> {email}
//             </p>
//             <p>
//               <strong>Message:</strong> {message}
//             </p>
//             <p>
//               <strong>Interested-in:</strong> {interestedIn}
//             </p>
//             interested-in
//           </div>
//           <p>We will get back to the sender as soon as possible.</p>
//           <p>
//             Best regards,
//             <br />
//             Your Company Name
//           </p>
//         </div>
//       </body>
//     </html>
//   );
// }
import { Html, Button } from "@react-email/components";

export const EmailInquiry = ({ url }) => {
  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
};
