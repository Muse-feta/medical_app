import "server-only"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";
var nodemailer = require("nodemailer");
import { PrismaClient } from "@prisma/client"
import { Html } from "next/document";

const prisma = new PrismaClient()

export const mailer = async ({email, emailType, userId}: any) => {
    try {
        console.log("mailer", email, emailType, userId)
        // hashed password
        // const salt = await bcryptjs.genSaltSync(10)
        // const hashedId = await bcryptjs.hash(userId.toString(), salt)
        const secret = process.env.SECRET;
        if (!secret) {
          throw new Error("JWT secret is not defined");
        }
        const data = {
          id: userId,
          email: email,
        }
        const hashedId = jwt.sign(data, secret);

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

        const baseUrl = process.env.BASE_URL;

        var mailOptions = {
          from: "Ethio Medical App",
          to: email,
          subject: `${
            emailType === "VERIFY" ? "Verify Email" : "Reset Password"
          }`,
          html: `${
            emailType === "VERIFY"
              ? `<a href="${baseUrl}/verify?token=${hashedId}">Verify Email</a>`
              : `<a href="${baseUrl}/reset-password?token=${hashedId}">Reset Password</a>`
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