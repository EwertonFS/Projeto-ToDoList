import express from "express";
import knex from 'knex'
import dotenv from "dotenv";
import createUser from'./endpoints/createUser'
import getUserById from "./endpoints/getUserById";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
import getTaskById from "./endpoints/getTaskById";

dotenv.config()

export const connection = knex ({
    client:'mysql',
    connection:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port : 3306
    }
   
})

const app = express()
app.use(express.json())

//chamada da  funcao da requisicao
app.post('/user',createUser)

//chamada da funcao da requisicao
app.post('/user/edit/:id',editUser)

//chamada da funcao
app.get('/user/:id',getUserById)

//chamada da função
app.put('/task',createTask)

//chamada da Função
app.get('/task/:id',getTaskById)

app.listen(3003,()=>{
    console.log('servidor rodando na porta 3003')
})


