# dotatryhard_nestjs              
## project structure
```                    
dotatryhard_nestjs/
    docker-entrypoint.sh
    package-lock.json
    README.md
    Dockerfile
    tsconfig.json
    nest-cli.json
    package.json
    yarn.lock
    tsconfig.build.json
    src/
        app.module.ts
        main.ts
        conf/
             .env.ts.exemple
        app/
            players/
                players.service.spec.ts
                players.controller.ts
                players.module.ts
                players.service.ts
                players.controller.spec.ts
                entities/
                    player.entity.ts
                dto/
                    update-player.dto.ts
                    create-player.dto.ts
            players-matches/
                players-matches.controller.spec.ts
                players-matches.service.ts
                players-matches.controller.ts
                players-matches.module.ts
                players-matches.service.spec.ts
                entities/
                    players-match.entity.ts
                dto/
                    create-players-match.dto.ts
                    update-players-match.dto.ts
            matches/
                matches.service.spec.ts
                matches.service.ts
                matches.controller.spec.ts
                matches.module.ts
                matches.controller.ts
                entities/
                    match.entity.ts
                dto/
                    create-match.dto.ts
                    update-match.dto.ts
    test/
        jest-e2e.json
        app.e2e-spec.ts
    docker/
        prod.yml
        nginx-certbot.env.exemple
        dev.yml
        user_conf.conf
        arm_dev.yml
        nginx/
            nginx.conf
            server
            nginx.dockerfile
            server.d                
```
## Propósito do Projeto

Este projeto é um aplicativo NestJS que gerencia dados de jogadores e partidas, provavelmente para um jogo ou plataforma similar.  Ele usa TypeORM com PostgreSQL para o banco de dados, Swagger para documentação da API, e ferramentas de teste como Jest e Supertest.  O projeto também utiliza Docker para implantação, com configurações separadas para desenvolvimento e produção, integrando Nginx na produção.

## Dependências

* NestJS
* TypeORM
* PostgreSQL
* Swagger
* Class-Validator
* Class-Transformer
* Jest
* Supertest
* ESLint
* Prettier
* Docker
* Nginx (para produção)


## Como Instalar

1. Clonar o repositório.
2. Instalar dependências: `npm install`
3. Criar arquivo `.env` com as credenciais do banco de dados e outras configurações.
4. Executar o aplicativo: `npm run start:dev` (ou `npm run start` para produção)


## Como Usar

A utilização dependerá da funcionalidade específica do aplicativo, que não foi detalhada.  A API provavelmente expõe endpoints para criação, leitura, atualização e deleção de jogadores e partidas, acessíveis através de ferramentas como `curl` ou Postman. A documentação Swagger auxiliará na interação com a API.


## Arquitetura

O aplicativo utiliza a arquitetura baseada em camadas do NestJS.  Ele tem modelos de dados (entidades TypeORM), serviços para lógica de negócio, controladores para lidar com requisições HTTP e, possivelmente, outras camadas como repositórios. A comunicação entre os containers é feita através de uma rede Docker customizada. O Nginx atua como um reverse proxy na produção.


## Pipeline

O pipeline não é detalhado, mas provavelmente envolve testes unitários (Jest), testes de integração e, no caso de produção, a construção de imagens Docker e implantação usando Docker Compose.
                
                