import { Router } from "express";
import { sign, verify } from "jsonwebtoken";
import { prisma } from "..";
import { hashSync, compareSync, genSaltSync } from "bcrypt";
const AuthRouter = Router();

AuthRouter.get("/try", async (req, res, next) => {
  const { user, password } = req.query;
  const existUser = await prisma.user.findUnique({
    where: { userName: String(user) },
  });
  if (existUser) {
    if (compareSync(String(password), existUser.password)) {
      const jwt = sign(
        { user: user, id: existUser.id, role: existUser.role },
        process.env.SECRET
      );
      return res.json(jwt);
    }
  } else {
    const salt = genSaltSync();
    const pass = hashSync(String(password), salt);
    const newUser = await prisma.user.create({
      data: { userName: String(user), role: "Student", password: pass },
    });

    const jwt = sign(
      { user: user, id: newUser.id, role: newUser.role },
      process.env.SECRET
    );
    return res.json(jwt);
  }

  res.sendStatus(403);
});

export default AuthRouter;
