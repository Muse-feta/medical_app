import { format } from "date-fns";

var nodemailer = require("nodemailer");

export const appointmentEmail = (email: string, name: string, date: string) => {
    const dateObj = new Date(date);

    // Format the date and time
    const formattedDate = format(dateObj, "M/dd/yyyy, h:mm:ss a");
  // sending email
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fetamuse@gmail.com",
      pass: "nhkc meca hwio dgyk",
    },
  });

  var mailOptions = {
    from: "Ethio Medical App",
    to: email,
    subject: "Appointment Booking",
    html: `
      <div>
        <h1>Appointment Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Your appointment has been successfully booked.</p>
        <p><strong>Date and Time:</strong> ${formattedDate}</p>
        <p>Thank you for choosing Ethio Medical App.</p>
        <p>Best regards,<br/>Ethio Medical App Team</p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
