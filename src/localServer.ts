import "reflect-metadata";
import { createServer } from "./server";

const port = process.env.PORT || 3000;

createServer().then((server) => {
  server.listen(port);
  console.log(`Server running on port ${port}`);
});
