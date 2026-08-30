# LoadForge Learning Log

This log records major concepts, experiments, mistakes, debugging sessions,
and lessons learned while building LoadForge.

---

## 2026-08-25 — Day 1: Environment and Project Setup

### What I did

- Verified Node.js, npm, and Git installations.
- Discovered that Node.js was installed but was missing from Windows PATH.
- Upgraded Node.js from v22.13.1 to Node.js 24 LTS.
- Created the LoadForge project directory.
- Initialized a Git repository.
- Created the initial README.
- Initialized the project with npm.
- Created package.json manually through the npm init prompts.
- Configured ES Modules.
- Added repository line-ending rules.
- Created the first Node.js program.
- Added an npm start script.
- Created a GitHub repository.
- Connected the local repository to GitHub.
- Pushed the main branch.

### Important Things I Learned

#### PATH

Typing a command such as:

node

does not tell Windows where node.exe is located.

Windows searches directories contained in the PATH environment variable.

Node can therefore be installed correctly while the command `node` still
fails if its installation directory is missing from PATH.

#### Git is not GitHub

Git is the local version-control system.

GitHub hosts a remote Git repository and provides collaboration features
such as Pull Requests and GitHub Actions.

#### Working Tree → Staging Area → Repository

Changes move through Git approximately like this:

Working tree
→ git add
→ staging area / index
→ git commit
→ repository history

#### Line Endings

Windows commonly uses CRLF.

Linux and many development tools commonly use LF.

LoadForge standardizes source/configuration files on LF through
.gitattributes.

### Debugging Lesson

An error message does not necessarily identify the root cause.

When `node` was not recognized, the first assumption was that Node wasn't
installed.

Testing the executable directly proved that Node existed and worked.

The actual issue was command resolution through PATH.

This reinforced the value of isolating variables while debugging.

---

## 2026-08-30 — Raw Node.js HTTP Server

### What I did

- Imported Node's built-in HTTP module.
- Created an HTTP server.
- Added a request listener.
- Started listening on port 3000.
- Used Chrome to send requests to localhost.
- Observed additional requests automatically made by Chrome.
- Completed HTTP responses with response.end().
- Inspected HTTP methods and URLs.
- Added basic routing.
- Added 200 and 404 responses.
- Created a GET /health endpoint.
- Returned JSON from the health endpoint.

### Important Things I Learned

#### Creating a server is not the same as listening

createServer()

creates a server object.

server.listen()

starts accepting network connections.

#### A server can remain running while individual responses finish

The browser originally kept loading because the HTTP response had never
been completed.

The issue was not simply that the server process remained running.

response.end()

completes an individual HTTP response.

#### One browser action can cause multiple HTTP requests

Opening localhost caused requests including:

GET /
GET /favicon.ico

and Chrome-specific development requests.

One user action therefore does not necessarily equal one HTTP request.

This will become important when modeling performance workloads later.

### Questions / Things to Reinforce

- Event loop
- callbacks
- HTTP request lifecycle
- objects vs JSON
- serialization vs deserialization
- status-code families
