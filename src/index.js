import { createServer } from "node:http";

const PORT = 3000;

const server = createServer((request, response) => {
  console.log(`Method: ${request.method}`);
  console.log(`URL: ${request.url}`);

  response.setHeader("Content-Type", "text/plain");

  if (request.method === "GET" && request.url === "/") {
    response.statusCode = 200;
    response.end("Hello from LoadForge!");
    return;
  }

  if (request.method === "GET" && request.url === "/health") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");

    const body = {
      status: "ok",
      service: "loadforge",
    };

    response.end(JSON.stringify(body));
    return;
  }

  response.statusCode = 404;
  response.end("Not Found");
});

const appName = "LoadForge";
server.listen(PORT, () => {
  console.log(`${appName} is running.`);
  console.log(`Node version: ${process.version}`);
  console.log(`Platform: ${process.platform}`);
  console.log(`Process ID: ${process.pid}`);
  console.log(`Working directory: ${process.cwd()}`);
});
