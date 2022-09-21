import { connection } from ".."; //dois pontos é igaul a index
export default async function updateUser(
  // a interrogação mostra que não é obrigatório na função
  id: string,
  name?: string,
  nickname?: string,
  email?: string
) {
  //atualizando as tabelas de acordo com oque chegar
  //nãno pe a melhor solução possivel poderia ser tudo em unica query

  if (name) {
    await connection.raw(`
    UPDATE to_do_list_users
    SET name = '${name}'
    WHERE ID = '${id}'
    
    `);
  }
  if (nickname) {
    await connection.raw(`
        UPDATE to_do_list_users
        SET nickname = '${nickname}'
        WHERE ID = '${id}'
        
        `);
  }
  if (email) {
    await connection.raw(`
            UPDATE to_do_list_users
            SET email = '${email}'
            WHERE ID = '${id}'
            
            `);
  }
}
