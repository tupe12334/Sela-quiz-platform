import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
import AuthRouter from "./auth/Auth";
import QuestionRouter from "./question";
import UserRouter from "./user";
require("dotenv").config();
const app = express();
app.use(cors());
export const prisma = new PrismaClient();
app.use("/auth", AuthRouter);
app.use("/user", UserRouter);
app.use("/question", QuestionRouter);

app.listen(5000, () => {
  console.log("listen in: http://localhost:5000");
});
