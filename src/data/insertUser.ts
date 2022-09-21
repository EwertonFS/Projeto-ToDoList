import { connection } from "..";


export default async function insertUser(
   id:String,
   name:String,
   nickname:String,
   email:string
){
    await connection.insert({
        id,
        name,
        nickname,
        email
    }).into('to_do_list_users')

}