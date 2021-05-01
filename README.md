# Serverless AWS Lambda API

### Simple AWS Lambda Functions API using:

- TypeScript
- [Serverless](https://www.serverless.com/)
- [routing-controllers](https://github.com/typestack/routing-controllers)

## - Prerequisites

- AWS account ([1 year free account here](https://aws.amazon.com/free/));
- IAM user with [these permissions](https://gist.github.com/lukaskj/671a21c3acc55d801584939ebf2155f8);
- [AWS CLI](https://aws.amazon.com/cli/)
- AWS CLI [configured](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)

## - Installing dependencies

```bash
$ yarn
```

## - Running
- Serverless offline (Lambda mock)
```
$ yarn offline
```

- Local server (Lambda mock)
```
$ yarn local
```

## - Deploying to AWS
```
$ yarn deploy
```

## - Testing
```
$ yarn test
```




### Dev packages
- [eslint](https://github.com/eslint/eslint)
- [jest](https://github.com/facebook/jest)
- [husky](https://github.com/typicode/husky)