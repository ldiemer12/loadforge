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

---

## 2026-09-03 — Titles Resource and API Testing

### Work completed

- Added an in-memory collection of title objects with numeric IDs and title
  strings.
- Added `GET /titles` to return the complete collection as JSON.
- Added `GET /titles/:id` to return one matching title.
- Added validation that rejects non-positive, fractional, and non-numeric title
  IDs with `400 Bad Request`.
- Added a `404 Not Found` JSON response for valid IDs that do not match a title.
- Parsed request URLs and split path segments to support a path parameter.
- Refactored server construction into the `createAppServer()` factory function
  in `src/app.js`.
- Kept process startup and port 3000 configuration in `src/index.js`.
- Added an `npm test` script using Node.js's built-in test runner.
- Added integration tests for the title collection, an existing title, a
  missing title, and invalid title IDs.

### Concepts demonstrated

#### Separating construction from startup

`createAppServer()` creates and returns a server without immediately choosing a
port. The production entry point starts that server on port 3000, while the
test suite starts it on an operating-system-assigned port. This separation
makes the same application behavior reusable in both environments.

#### Testing through the HTTP boundary

The tests use `fetch` to make real HTTP requests to the locally running test
server. Assertions check status codes, content types, and parsed response
bodies. These are integration tests because they exercise several application
parts together rather than calling one routing expression in isolation.

#### Controlled test setup and cleanup

The `before` test hook creates the shared server fixture and waits for it to
start. The `after` hook closes it. `async` functions, promises, and `await`
ensure setup and cleanup finish at the required points in the test lifecycle.

#### Distinguishing invalid input from a missing resource

The detail route first validates the shape of the supplied ID. Invalid input
returns `400 Bad Request`; a valid positive integer with no matching record
returns `404 Not Found`. This distinguishes a malformed request from a resource
that does not exist.

### Debugging observations

- HTTP request paths begin with `/`, so route comparisons must include the
  leading slash.
- Relative import paths require the correct `../` directory traversal.
- A function must be called with `()` to obtain the server it creates.
- A stray `}` in a template-literal URL becomes `%7D` after URL encoding and
  changes the requested route.
- Reading the first reported error and comparing logged URLs with intended
  routes helps isolate failures before investigating later assertions.

### Questions / Things to Reinforce

- unit tests compared with integration tests
- test isolation and shared fixtures
- promise error handling
- formal schema validation
- expanding regression coverage for existing routes and HTTP methods
