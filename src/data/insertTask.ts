import { connection } from "..";
export default async function insertTask(
  id: string,
  title: string,
  description: string,
  deadline: string,
  authorId: string
) {
  await connection('to_do_list_tasks')
    .insert({
      id,
      title,
      description,
      deadline,
      author_id:authorId, //porque na tabela a chave não esta igual ao valor da tabela no banco
    })
    
}
