import  { Request, Response } from 'express'
import insertUser from '../data/insertUser'

export default async function createUser(
    req:Request,res:Response
){
    try {
        
        //validar entreadas da requisocao
        if(
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ){
            res
            .status(400)//status generico de error
            .send('Preencha os campos "name","nickname" e "email"')

            return
        }
        // consultar o banco de dados 
        const id:string = Date.now() + Math.random().toString() // transf number em string

        await insertUser(
            id,
            req.body.name ,
            req.body.nickname ,
            req.body.email
        )
        
        res
        .status(200)
        .send('Usuario criado com sucesso!')
        // validar as saidas do banco de dados
        // responder a requisicao
        
        
    } catch (error:any) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
    }
}