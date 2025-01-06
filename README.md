## Summary

This project, `dotatryhard_nestjs`, is a NestJS application designed to manage Dota 2 Ability Draft match data. It uses TypeORM with PostgreSQL for database interaction, Swagger for API documentation, and Jest for testing. The application models players, matches, and the relationship between them.  It includes a robust testing strategy and utilizes Docker for development and production deployment. The project uses a multi-container architecture with PostgreSQL, pgAdmin, and Nginx in production.  The `package.json` file defines npm scripts for building, running, testing, and managing Docker containers.  TypeScript with a `tsconfig.json` file manages the codebase. A `nest-cli.json` file configures the NestJS CLI.  Separate `tsconfig.build.json` configures the build process. The `app.module.ts` file is the root module, importing other modules like `PlayersModule`, `MatchesModule`, and `PlayersMatchesModule`.  The `main.ts` file bootstraps the application and configures Swagger. The `players.service.ts` handles player data, and the `players.controller.ts` exposes RESTful endpoints for players.  A similar structure exists for managing matches. DTOs (`create-player.dto.ts`, `update-player.dto.ts`, `create-players-match.dto.ts`, `update-players-match.dto.ts`, `create-match.dto.ts`, `update-match.dto.ts`) are used for data validation.  End-to-end tests are defined in `app.e2e-spec.ts`. Docker Compose files (`dev.yml`, `prod.yml`, `arm_dev.yml`) manage the development and production environments.  Entities include `player.entity.ts` and `players-match.entity.ts`.


## Tech Stack

* NestJS
* TypeORM
* PostgreSQL
* Swagger
* Jest
* Supertest
* TypeScript
* Docker
* Docker Compose
* Nginx
* pgAdmin
* Let's Encrypt (Certbot - planned)
* class-validator
* class-transformer
* RxJS
