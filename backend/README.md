# Trabalho final 🚀


Trabalho final desenvolvido para a disciplina de Desenvolvimento de Sistemas na Web

### Instalação - Backend

O backend precisa do [Node.js](https://nodejs.org) e [MongoDB](https://docs.mongodb.com/manual/installation/) para rodar

Clone o repositório instale as dependencias e inicie o servidor.
Execute os seguintes comando no cmd (prompt de comando):

```sh
$ cd backend
$ npm install
$ cd src
$ node server
```

Se tudo ocorrer bem o servidor estará esperando por requisições em
```sh
127.0.0.1:3000
```
### Instalação - Frontend


Clone o repositório instale as dependencias e inicie o frontend.
Execute os seguintes comando no cmd (prompt de comando):
```sh
$ cd frontend
$ npm install
$ ng serve
```

Se tudo ocorrer bem o frontend estará ouvindo em
```sh
127.0.0.1:4200
```

### Criação - banco de dados
Para criar o banco de dados execute o seguinte comando abaixo no prompt de comando:
```sh
mongod --dbpath "C:\<your-dir-to-project>frontend\data"
```