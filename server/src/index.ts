import { PrismaClient } from "@prisma/client";
import express from "express";
import { verify } from "jsonwebtoken";
import AuthRouter from "./auth/Auth";
require("dotenv").config();
const app = express();
export const prisma = new PrismaClient();
app.use("/auth", AuthRouter);

app.listen(5000, () => {
  console.log("listen in: http://localhost:5000");
});
