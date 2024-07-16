import "server-only"
import bcryptjs from "bcryptjs"
var nodemailer = require("nodemailer");
import { PrismaClient } from "@prisma/client"
import { Html } from "next/document";

const prisma = new PrismaClient()

export const mailer = async ({email, emailType, userId}: any) => {
    try {
        console.log("mailer", email, emailType, userId)
        // hashed password
        const salt = await bcryptjs.genSaltSync(10)
        const hashedId = await bcryptjs.hash(userId.toString(), salt)

        // updating user verification token
        if(emailType === "VERIFY"){
            try {
                await prisma.user.update({
                  where: {
                    id: userId,
                  },
                  data: {
                    verifyToken: hashedId,
                    verifyTokenExpiry: new Date(Date.now() + 1000 * 60 * 60 * 24),
                  },
                });
            } catch (error) {
                console.log("Error updating user verification token", error);
            }
        }else if(emailType === "RESET"){
            try {
                await prisma.user.update({
                  where: {
                    id: userId,
                  },
                  data: {
                    forgotPasswordToken: hashedId,
                    forgotPasswordTokenExpiry: new Date(
                      Date.now() + 1000 * 60 * 60 * 24
                    ),
                  },
                });
            } catch (error) {
                console.log("Error updating user verification token", error);
            }
        }

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
          subject: `${
            emailType === "VERIFY" ? "Verify Email" : "Reset Password"
          }`,
          html: `${
            emailType === "VERIFY"
              ? `<a href="http://localhost:3000/verify?token=${hashedId}">Verify Email</a>`
              : `<a href="http://localhost:3000/reset-password?token=${hashedId}">Reset Password</a>`
          }`,
        };

        transporter.sendMail(mailOptions, function (error: any, info: any) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });

    } catch (error: any) {
        console.log("error occuring to send email", error.message)
    }
}