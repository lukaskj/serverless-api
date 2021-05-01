// modern module syntax
export async function handler(event: unknown, context: unknown, callback: Function) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
      context,
    }),
  };

  callback(null, response);
}
