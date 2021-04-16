<h1 align="center">
    GoBarber
</h1>

## Sobre o projeto

Este projeto foi desenvolvido como desafio para a vaga de desenvolvedor na [Agility](https://www.somosagility.com.br/). 

O desafio objetivo da aplicação é consumir dois end-points que retornam objetos JSON com as informações de usuários. Essas informações devem ser re-ordenadas e retornados ao usuário em um HTML. O usuário deve também ser capaz de filtrar os resultados.

## Executando a aplicação

### Requisitos
- [**Git**](https://git-scm.com/) para clonar o projeto.
- [**Node.js**](https://nodejs.org/en/) instalado.
- [**Docker**](https://www.docker.com/).
- Um dispositivo ou emulador iOS ou Android


### Clonar o projeto
``` bash
  # Clonar o projeto:
  $ git clone https://github.com/eliasmatheus/gostack13-go-barber

  # Entrar no diretório:
  $ cd gostack13-go-barber
```

### Iniciar a imagem do PostgreSQL no Docker
```bash
  # Criar o container:
  $ docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

  # Listar todos os containers instalados, copiar o CONTAINER ID do postgress:
  $ docker ps -a

  # Rodar a imagem:
  $ docker run {CONTAINER ID} 

  # Para a imagem:
  $ docker stop {CONTAINER ID} 
```

### Iniciar back-end
```bash
  # Entrar no diretório do back-end:
  $ cd backend

  # Instalar as dependências:
  $ yarn

  # Rodar as migrations:
  $ yarn typeorm migration:run

  # Rodar a aplicação:
  $ yarn dev:server
```

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
  $ yarn ios ou yarn android 
```
