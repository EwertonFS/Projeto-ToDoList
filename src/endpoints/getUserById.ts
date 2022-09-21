import expres, { Request, Response } from 'express'
import selectUserById from '../data/selectUserById'

export default async function getUserById (
    req:Request,
    res:Response
){
    try {
        const user = await selectUserById(req.params.id)

        if(!user){
            res.status(404).send({
                message:"Usuario não Encontrado"
            })
          return
        }


        res.status(200).send({
            message:"Sucesso",
            id:user.id,
            nickname:user.nickname
        })
       
        // consultar o banco de dados 
        // validar as saidas do banco de dados
        // responder a requisicao
        
        
    } catch (error:any) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
    }
}