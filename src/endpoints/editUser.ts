import expres, { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(req: Request, res: Response) {
  try {
    //validar entreadas da requisocao VINDAS DO BODY
    if (
      req.body.name === "" ||
      req.body.nickname === "" ||
      req.body.email === ""
    ) {
      res.status(400).send({
        message: "Nenhumm dos campos podem ser em branco",
      });

      return
    }
    if (!req.body.name && req.body.nickname && req.body.email) {
     res.status(400).send({
        message:"Escolha ao menos uma valor para alterar"
     })
     return
    }
    
    await updateUser(
        req.params.id,
        req.body.name,
        req.body.nickname,
        req.body.email
    )

    res.status(200).send({
        message:"usuario atualizado"
    })

  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
