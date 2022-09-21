import expres, { Request, Response } from "express";
import moment from "moment";
import insertTask from "../data/insertTask";

export default async function createTask(req: Request, res: Response) {
  try {
    //validar entreadas da requisocao

    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.deadline ||
      !req.body.authorId
    ) {
      res.status(400).send({
        message: '"tile","description","deadline","authorId" são Obrigatorios',
      });

      return; //para parar de execução do código mas exitem outras formas
    }

    const dateDiff: number =
      moment(req.body.deadline, "DD/MM/YYYY").unix() - moment().unix(); //converter em times tem
    // console.log(dateDiff);

    if (dateDiff <= 0) {
      res.status(400).send({
        message: `"deadline" deve ser um data futura`,
      });

      return;
    }
    //informacoes validadas inclusive de tempo agora é hora de conectar ao banco
    const id: string = Date.now() + Math.random().toString(); // transf number em string

    //estando tudo certo poderemos inserir no banco

    await insertTask(
      id,
      req.body.title,
      req.body.description,
     moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'), //transformando para o formato do BC
      req.body.authorId
    );
    res.status(200).send({
      message: "tarefa criada com sucesso",
      id //sempre bom informar o id para o front
    });
  } catch (error: any) {
    // responder a requisicao
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
