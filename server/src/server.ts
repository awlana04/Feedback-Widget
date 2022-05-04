import "dotenv/config";

import express from "express";
import nodemailer from "nodemailer";

import { prisma } from "./prisma";

const app = express();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

app.use(express.json());

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Awlana Costa <cawlana040@gmail.com>",
    subject: "Novo feedback",
    html: [
      '<div styles="font-family: sans-serif; font-size: 16px; color: #111">',
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      "</div>",
    ].join("\n"),
  });

  return res.status(201).json(feedback);
});

app.listen(3333, () => console.log("🚀 Server running at port: 3333"));
