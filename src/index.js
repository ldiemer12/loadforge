import { createAppServer } from "./app.js";

const PORT = 3000;

const appName = "LoadForge";
const server = createAppServer();
server.listen(PORT, () => {
  console.log(`${appName} is running.`);
  console.log(`Node version: ${process.version}`);
  console.log(`Platform: ${process.platform}`);
  console.log(`Process ID: ${process.pid}`);
  console.log(`Working directory: ${process.cwd()}`);
});
