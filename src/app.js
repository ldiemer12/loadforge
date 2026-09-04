import { createServer } from "node:http";

const titles = [
  {
    id: 1,
    title: "The Example Movie",
  },
  {
    id: 2,
    title: "Another Example",
  },
];

export function createAppServer() {
  return createServer((request, response) => {
    const url = new URL(request.url, "http://localhost");
    const pathname = url.pathname;
    const pathParts = pathname.split("/").filter((part) => part !== "");
    console.log(`Method: ${request.method}`);
    console.log(`URL: ${request.url}`);

    response.setHeader("Content-Type", "text/plain");

    if (request.method === "GET" && pathname === "/") {
      response.statusCode = 200;
      response.end("Hello from LoadForge!");
      return;
    }

    if (request.method === "GET" && pathname === "/health") {
      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");

      const body = {
        status: "ok",
        service: "loadforge",
      };

      response.end(JSON.stringify(body));
      return;
    }

    if (request.method === "GET" && pathname === "/titles") {
      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(titles));
      return;
    }

    if (
      request.method === "GET" &&
      pathParts.length === 2 &&
      pathParts[0] === "titles"
    ) {
      const id = Number(pathParts[1]);
      if (!Number.isInteger(id) || id <= 0) {
        response.statusCode = 400;
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify({ error: "Invalid title ID" }));
        return;
      }
      const title = titles.find((item) => item.id === id);
      if (!title) {
        response.statusCode = 404;
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify({ error: "Title not found" }));
        return;
      }
      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(title));
      return;
    }

    response.statusCode = 404;

    response.end("Not Found");
  });
}
