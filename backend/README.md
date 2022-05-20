<h1> <strong> Projeto Ebyrt </strong></h1>

<h1> <strong>To Do List - Back-end </strong></h1>

<b> Funcionalidades:
- Rota para registro de usuário no sistema;
- Rota para logar no sistema; </b>
- Lista todas as tarefas: pode ser ordenável por data de criação, status ou ordem alfabética;
- Lista todas as tarefas;
- Atualiza uma tarefa da lista: seu conteúdo, sua data ou seu status;
- Remove uma tarefa do banco de dados;

<h1> Como instalar: </h1>

No seu terminal, após clonar todo o projeto (conforme está no README principal), siga essa ordem de comandos:

    cd backend
    
	npm install

	npm start
    
### A aplicação irá rodar na porta 3001.
<br>
<hr>

<h1> Rotas: </h1>

### `/register`: Requisição `POST`. Irá registrar um usuário. O corpo da requisição deve ser:
```
{
  "username": "camila",
  "email": "camila@email.com",
  "password": "cami@123"
}
```
Receberá como resposta o token gerado para o usuário e o código `HTTP 201 - CREATED`:
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhbWlsYSIsImVtYWlsIjoiY2FtaUBlbWFpbC5jb20iLCJpYXQiOjE2NTMwMDQzNDQsImV4cCI6MTY1MzA5MDc0NH0.obufTQpCCKtRTBcMZUsrgzQMzGsH8Dmnd_d9wtOG2-Y"
}
```

Esse <strong>token</strong> será usado no <strong>Header</strong> para utilizar as demais requisições;

### `/login`: Requisição `POST`. Loga o usuário no sistema. O corpo da requisição deve ser:
```
{
  "email": "cami@email.com",
  "password": "cami@123"
}
```
Receberá como resposta as informações do usuário logado e o código` HTTP 200 - OK`:
```
{
  "id": "6286d8382607ef5281d693eb",
  "username": "camila",
  "email": "cami@email.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhbWlAZW1haWwuY29tIiwiaWF0IjoxNjUzMDA0NDg1LCJleHAiOjE2NTMwOTA4ODV9.Wie2WBFeetYVvz_u9UJ6duzwjLB8UYRVWCL1UjIAUPI"
}
```

### `/create-task`: Requisição `POST`. Cria uma nova tarefa. Corpo da requisição:
```
{
  "task": "comprar presente dia dos pais",
  "dueDate": "2022-08-14"
}
```

Resposta esperada com o código `HTTP 201 - CREATED`:
```
{
  "_id": "6286da2d2607ef5281d693ec",
  "user": "camila",
  "task": "comprar presente dia dos pais",
  "dueDate": "2022-08-14"
}
```

### ⚠️ Atenção: é necessário que o token esteja no Header(Authorization)

### `/tasks`: Requisição `GET`. Lista todas as tarefas do usuário logado.
Resposta esperada, junto com o código `HTTP 200 - OK`:
```
[
	{
		"_id": "6286da2d2607ef5281d693ec",
		"user": "camila",
		"task": "comprar presente dia dos pais",
		"createdAt": "2022-05-20T00:00:45.524Z",
		"dueDate": "2022-08-14",
		"status": "Pending"
	}
]
```

### `tasks/date`: Requisição `GET`. Retorna as tarefas por ordem de criação, da mais recente para a mais antiga. Retorna o código `HTTP 200 - OK`:
```
[
	{
		"_id": "6286dc7b40eb0d54ecc7d22a",
		"user": "camila",
		"task": "finalizar portfolio",
		"createdAt": "2022-05-20T00:10:35.223Z",
		"dueDate": "2022-05-21",
		"status": "Started"
	},
	{
		"_id": "6286dc6c40eb0d54ecc7d229",
		"user": "camila",
		"task": "levar o pet no veterinário",
		"createdAt": "2022-05-20T00:10:20.577Z",
		"dueDate": "2022-05-23",
		"status": "Pending"
	}
]
```

### `tasks/alpha`: Requisição `GET`. Retorna as tarefas em ordem alfabética. Retorna o código` HTTP 200 - OK`:
```
[
	{
		"_id": "6286da2d2607ef5281d693ec",
		"user": "camila",
		"task": "comprar presente dia dos pais",
		"createdAt": "2022-05-20T00:00:45.524Z",
		"dueDate": "2022-08-14",
		"status": "OK"
	},
	{
		"_id": "6286dc7b40eb0d54ecc7d22a",
		"user": "camila",
		"task": "finalizar portfolio",
		"createdAt": "2022-05-20T00:10:35.223Z",
		"dueDate": "2022-05-21",
		"status": "Started"
	},
	{
		"_id": "6286dc6c40eb0d54ecc7d229",
		"user": "camila",
		"task": "levar o pet no veterinário",
		"createdAt": "2022-05-20T00:10:20.577Z",
		"dueDate": "2022-05-23",
		"status": "Pending"
	}
]
```

### `tasks/status`: Requisição `GET`. Retorna as tarefas por ordem de status - Started, Pending e Done. Retorna o código `HTTP 200 - OK`.
```
[
	{
		"_id": "6286dc7b40eb0d54ecc7d22a",
		"user": "camila",
		"task": "finalizar portfolio",
		"createdAt": "2022-05-20T00:10:35.223Z",
		"dueDate": "2022-05-21",
		"status": "Started"
	},
	{
		"_id": "6286dc6c40eb0d54ecc7d229",
		"user": "camila",
		"task": "levar o pet no veterinário",
		"createdAt": "2022-05-20T00:10:20.577Z",
		"dueDate": "2022-05-23",
		"status": "Pending"
	},
	{
		"_id": "6286da2d2607ef5281d693ec",
		"user": "camila",
		"task": "comprar presente dia dos pais",
		"createdAt": "2022-05-20T00:00:45.524Z",
		"dueDate": "2022-08-14",
		"status": "Done"
	}
]
```

### `task/:id`: Requisição `PUT`. Atualização conteúdo ou data de entrega de uma tarefa. Deve ser informado o id da tarefa no parâmetro ":id" da URL. O corpo da requisição deve ser:
```
{
	"task": "finalizar portfolio do cliente",
	"dueDate": "2022-05-25"
}
```
Irá retornar com as informações e o código `HTTP 200 - OK`:
```
{
	"_id": "6286dc7b40eb0d54ecc7d22a",
	"user": "camila",
	"task": "finalizar portfolio do cliente",
	"createdAt": "2022-05-20T00:10:35.223Z",
	"dueDate": "2022-05-25",
	"status": "Started"
}
```
### `task/status/:id`: Requisição `PUT`. Altera o status de uma tarefa. A id da tarefa deve ser informada no parâmetro ":id". O corpo da requisição deve ser:
```
{
	"status": "Pending"
}
```

Retornará com as seguintes informações e o código `HTTP 200 - OK`:
```
{
	"_id": "6286dc7b40eb0d54ecc7d22a",
	"user": "camila",
	"task": "finalizar portfolio do cliente",
	"createdAt": "2022-05-20T00:10:35.223Z",
	"dueDate": "2022-05-25",
	"status": "Pending"
}
```

### `task/:id`: Requisição `DELETE`. 
Remove uma tarefa. Deve-se informar o id da tarefa a ser removida no parâmetro ":id" da URL. Não é necessário passar informação no corpo da requisição. Também não haverá resposta no corpo, apenas o `Status HTTP 200 - OK.`

# Tecnologias utilizadas:
	NodeJS, Express e Mongoose.


