import { Router } from "express";
import { sign, verify } from "jsonwebtoken";
import { prisma } from "..";
const AuthRouter = Router();

AuthRouter.post("/try", async (req, res, next) => {
  const { user, password } = req.query;
  const existUser = await prisma.user.findUnique({
    where: { userName: String(user) },
  });
  if (existUser) {
    const jwt = sign({ user: user }, process.env.JWT_SECRET);
    console.log(jwt);

    res.json();
  }
  console.log(user);

  res.json();
});

export default AuthRouter;
