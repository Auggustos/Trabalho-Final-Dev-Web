# Trabalho final 🚀


Trabalho final desenvolvido para a disciplina de Desenvolvimento de Sistemas na Web

### Criação - banco de dados
Para criar o banco de dados execute o seguinte comando abaixo no prompt de comando:
```sh
mongod --dbpath "C:\<your-dir-to-project>\backend\data"
```
Com esse comando o mongodb irá armazenar os dados na pasta referida.

<h3>[IMPORTANTE] Windows?, leia aqui!</h5>

Caso você estiver usando Windows e o Mongo estiver como serviço, provavelmente ele não seguirá o caminho acima, pois pega direto da config, porém podemos parar o serviço utilizando:
```sh
net stop MongoDB
```

Após isso basta executar o mesmo comando acima:
```sh
mongod --dbpath "C:\<your-dir-to-project>\backend\data"
```
Assim o servidor do Mongo será criado na pasta backend em data!

### Instalação - Backend

O backend precisa do [Node.js](https://nodejs.org) e [MongoDB](https://docs.mongodb.com/manual/installation/) para rodar

Clone o repositório instale as dependencias e inicie o servidor.
Execute os seguintes comando no cmd (prompt de comando) lembrando que você deverá estar no nivel do repositório clonado:

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

ALUNOS:
João Pedro Josué - 2018011044
Rafael Augusto de Souza Silva - 2018001576
Thiago Siqueira Donizeti - 2018012355
