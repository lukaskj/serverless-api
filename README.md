# Serverless AWS Lambda API

### Simple AWS Lambda Functions API using:

- TypeScript
- [Serverless](https://www.serverless.com/)
- [routing-controllers](https://github.com/typestack/routing-controllers)

## # Prerequisites

- AWS account ([1 year free account here](https://aws.amazon.com/free/));
- IAM user with [these permissions](https://gist.github.com/lukaskj/671a21c3acc55d801584939ebf2155f8);
- [AWS CLI](https://aws.amazon.com/cli/)
- AWS CLI [configured](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)

## # Installing dependencies

```bash
$ yarn
```
## # TypeORM
### Config:
`.env` file (see .env.example)
### Directories:
- Entities: `src/database/entities`
- Migrations: `src/database/entities`
### Commands:
- Generate migrations:
```bash
$ yarn typeorm:migrate [migration name]
```

- Running migrations:
```bash
$ yarn typeorm:run
```

- General TypeORM commands:
```bash
$ yarn typeorm
```

## # Running

- Serverless offline (Lambda mock)

```
$ yarn offline
```

- Local server (default express)

```
$ yarn local
```

## # Deploying to AWS

```
$ yarn deploy
```

## # Testing

```
$ yarn test
```

---

### Dev packages

- [eslint](https://github.com/eslint/eslint)
- [jest](https://github.com/facebook/jest)
- [husky](https://github.com/typicode/husky)
