<h1 align="center">
    GoBarber
</h1>

## Sobre o projeto

## Executando a aplicação

### Requisitos

- [**Git**](https://git-scm.com/) para clonar o projeto.
- [**Node.js**](https://nodejs.org/en/) instalado.
- [**Docker**](https://www.docker.com/).
- Um dispositivo ou emulador iOS ou Android

### Clonar o projeto

```bash
  # Clonar o projeto:
  $ git clone https://github.com/eliasmatheus/gostack13-go-barber

  # Entrar no diretório:
  $ cd gostack13-go-barber
```

### Iniciar back-end

```bash
  # Entrar no diretório do back-end:
  $ cd backend

  # Instalar as dependências:
  $ yarn

  # Crie um database dentro do docker com o nome: gostack_gobarber

  # Rodar as migrations*:
  $ yarn typeorm migration:run

  # Rodar a aplicação*:
  $ yarn dev:server
```

\*A imagem do docker deve estar rodando.

### Rodar versão web

```bash
  # Entrar no diretório do front-end:
  $ cd frontend

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn start
```

### Rodar versão mobile

```bash
  # Entrar no diretório do mobile:
  $ cd mobile

  # Instalar as dependências:
  $ yarn

  # Rodar a aplicação:
  $ yarn start

  # Rodar o simulador:
  $ yarn ios ou yarn android
```

## Instruções para rodar a imagem do PostgreSQL e MongoDB

### Criar a imagem no Docker

#### PostgreSQL

```bash
  # Criar o container:
  $ docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

  # Caso queira deixar os arquivos do banco de dados fora do container,
  # basta adicionar o comando -v, seguido do caminho, no seguinte formato:
  {caminho}/PostgreSQL:/var/lib/postgresql/data

  $ docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -v {caminho}/PostgreSQL:/var/lib/postgresql/data-d postgres
```

#### MongoDB

```bash
  # Criar o container:
  $ docker run --name mongodb -p 27017:27017 -d -t mongo

```

### Iniciar a imagem do PostgreSQL no Docker

```bash
  # Listar todos os containers instalados, copiar o CONTAINER ID do postgress:
  $ docker ps -a

  # Rodar a imagem:
  $ docker run {CONTAINER ID}

  # Para a imagem:
  $ docker stop {CONTAINER ID}
```
