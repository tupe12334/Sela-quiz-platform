import { Router } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "..";

const UserRouter = Router();
UserRouter.get("/:id", async (req, res) => {
  const { jwt } = req.query;
  const { id } = req.params;
  try {
    const token = verify(String(jwt), process.env.SECRET);
    console.log(token);
    const user = await prisma.user.findUnique({ where: { id: id } });
    const questions = await prisma.user
      .findUnique({ where: { id: id } })
      .questions();
    const fields = await prisma.user.findUnique({ where: { id: id } }).fields();
    const organization = await prisma.user
      .findUnique({ where: { id: id } })
      .organisation();
    res.json({
      user: user,
      fields: fields,
      organization: organization,
      questions: questions,
    });
  } catch (error) {}
});

export default UserRouter;
