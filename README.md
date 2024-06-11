<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descrição

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalação

```bash
$ npm install
```

## Executando o APP

**Rodar local**

```bash
# Comentar a variável de ambiente na .env que se refere a rodar com Docker Compose.

DATABASE_URL=mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}

# Cria as tabelas no banco.
$ npx prisma db push

# Executar os seeds.
$ npm run seed

# Comando para rodar em desenvolvimento (já executa o build).
$ npm run start:dev

# Comando para rodar em produção (já executa o build).
$ npm run start:prod
```

**Rodar via Docker Compose**

```bash
# Comentar a variável de ambiente na .env que se refere a rodar local.

DATABASE_URL=mysql://<user>:<password>@<host>:<db_port>/<db_name>

# Subir os containers.
$ docker-compose up -d

# Acessar o container.
$ docker exec -it backend_application bash

# Cria as tabelas no banco.
$ npx prisma db push

# Executar os seeds.
$ npm run seed

# Comando para rodar em desenvolvimento (já executa o build).
$ npm run start:dev

# Comando para rodar em produção (já executa o build).
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
