import { Router } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "..";

const QuestionRouter = Router();
QuestionRouter.get("/:id", async (req, res) => {
  const { jwt } = req.query;
  const { id } = req.params;
  try {
    // const token = verify(String(jwt), process.env.SECRET);
    // console.log(token);
    // const user = await prisma.user.findUnique({ where: { id: id } });
    // const fields = await prisma.user.findUnique({ where: { id: id } }).fields();
    // const Organisation = await prisma.user
    //   .findUnique({ where: { id: id } })
    //   .Organisation();
    // res.json({ user: user, fields: fields, organization: Organisation });
  } catch (error) {}
});

export default QuestionRouter;
