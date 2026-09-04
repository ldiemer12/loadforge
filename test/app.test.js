import assert from "node:assert/strict";
import test, { after, before } from "node:test";
import { createAppServer } from "../src/app.js";

let server;
let baseUrl;

before(async () => {
  server = createAppServer();

  await new Promise((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(async () => {
  await new Promise((resolve) => {
    server.close(resolve);
  });
});

test("GET /titles returns the titles collection", async () => {
  const response = await fetch(`${baseUrl}/titles`);

  assert.equal(response.status, 200);

  assert.match(response.headers.get("content-type"), /^application\/json/);
  const body = await response.json();

  assert.deepEqual(body, [
    {
      id: 1,
      title: "The Example Movie",
    },
    {
      id: 2,
      title: "Another Example",
    },
  ]);
});

test("GET /titles/1 returns one title", async () => {
  const response = await fetch(`${baseUrl}/titles/1`);

  assert.equal(response.status, 200);

  const body = await response.json();

  assert.deepEqual(body, {
    id: 1,
    title: "The Example Movie",
  });
});

test("GET /titles/999 returns 404 when the title does not exist", async () => {
  const response = await fetch(`${baseUrl}/titles/999`);

  assert.equal(response.status, 404);

  const body = await response.json();

  assert.deepEqual(body, {
    error: "Title not found",
  });
});

test("GET /titles/abc returns 400 for an invalid title ID", async () => {
  const response = await fetch(`${baseUrl}/titles/abc`);

  assert.equal(response.status, 400);

  const body = await response.json();

  assert.deepEqual(body, {
    error: "Invalid title ID",
  });
});

test("GET /titles/1.5 returns 400 for an invalid title ID", async () => {
  const response = await fetch(`${baseUrl}/titles/1.5`);

  assert.equal(response.status, 400);

  const body = await response.json();

  assert.deepEqual(body, {
    error: "Invalid title ID",
  });
});
