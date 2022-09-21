## ToDoList

*Usuarios

- Id
- name
- nickName
- email

*Tarefas

- Id
- title
- description
- deadline
- status "to_do" || "doing" || "done"
- author
- assignees

*Tarefas

- Id
- title
- description
- deadline
- status "to_do" || "doing" || "done"
- author
- assignees

![Tabela Mysql](./assets/Mysql1.png)

*ENDPOINTS


- Criar Usuario : **Método:** POST,**Path:** `/user`**Body:**
  - name (obrigatírio)
  - nickname(obrigatorio)
  - email(obrigatorio)


- **Método:** GET**Path:** `/user/:id`
**Path Param**: é o id do usuário
**Body de Resposta:**
  - id
  - nickname
  
*EDITAR USUSÁRIO



**Método:** PUT
**Path:** `/user/edit/:id`
**Path Param**: é o id do usuário
**Body:**

- name (Opcional : Não pode ser Vazio)
- nickName (Opcional : Não pode ser Vazio)
- email (Opcional : Não pode ser Vazio)

* CRIAR TAREFA : 



**Método:** POST
**Path:** `/task`
**Body:**

- titile (obrigatorio)
- description (obrigatorio)
- deadline (obrigatorio;formato  `/DD/MM/YYYY`)
- authorid


* PEGAR TAREFA COM ID


**Método:** GET
**Path:** `/task/:id`

**Path Param**: é o id da tarefa

**Body de Resposta:**  retornanar um erro se não encontrar

- id
- title
- description
- deadline (obrigatorio;formato  `/DD/MM/YYYY`)
- status
- authorid
- authoridNickname


