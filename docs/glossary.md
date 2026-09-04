# LoadForge Glossary

Technical vocabulary encountered while building LoadForge.

---

## Abstraction

A simpler interface that hides some lower-level implementation details.

Example:

npm start

abstracts the underlying command:

node src/index.js

---

## Argument

An actual value supplied when calling a function.

Example:

console.log("Hello");

"Hello" is an argument.

See also: Parameter.

---

## Assertion

A check that compares an observed result with an expected result. A failed
assertion causes an automated test to fail and reports the mismatch.

LoadForge uses Node.js's `node:assert/strict` module to check HTTP status codes,
headers, and response bodies.

---

## async/await

JavaScript syntax for working with promises in a form that reads like
step-by-step code.

An `async` function can use `await` to pause that function until a promise
settles, without blocking the Node.js process from doing other work.

---

## Atomic Commit

A Git commit containing one coherent logical change.

Atomic commits are easier to review, understand, revert, and troubleshoot.

---

## Branch

An independent line of development in Git.

LoadForge's default branch is `main`.

Feature work can occur on separate branches before being merged.

---

## CLI

Command-Line Interface.

A text-based way of interacting with software through commands.

---

## Client

Software that initiates a request to another system.

A browser can act as an HTTP client.

---

## Commit

A recorded change or snapshot in Git repository history.

Commits contain metadata including an author, timestamp, message, and
references to repository objects.

---

## Dependency

External software that an application relies upon.

Example:

Express will eventually become a dependency of LoadForge.

---

## Deserialization

Converting serialized data back into an in-memory representation.

Example:

JSON.parse()

can convert JSON text into a JavaScript value.

See also: Serialization.

---

## Diff

A representation of differences between two versions of content.

Git uses diffs to show added and removed lines.

---

## Event

Something that occurs during program execution that other code may respond to.

An incoming HTTP request can generate a request event.

---

## Event-Driven Programming

A programming model in which code executes in response to events.

Node.js uses event-driven programming extensively.

---

## Factory Function

A function that creates and returns an object or other configured value.

LoadForge's `createAppServer()` is a factory function because each call creates
and returns an HTTP server. This lets production code and tests create servers
without sharing one permanently running instance.

---

## HEAD

Git's reference indicating the repository position currently checked out.

Usually HEAD points to the current branch.

---

## HTTP

Hypertext Transfer Protocol.

An application-layer protocol used for communication between clients
and servers on the web.

---

## HTTP Header

Metadata included with an HTTP request or response.

Example:

Content-Type: application/json

---

## HTTP Method

Indicates the intended operation of an HTTP request.

Examples:

GET
POST
PUT
PATCH
DELETE

---

## HTTP Status Code

A numeric code describing the outcome of an HTTP request.

Examples:

200 OK
201 Created
400 Bad Request
404 Not Found
500 Internal Server Error

---

## Index

Git's formal name for the staging area.

Changes placed in the index are candidates for the next commit.

---

## Integration Test

A test that verifies multiple parts of a system working together rather than
checking one isolated function.

LoadForge's API tests start the HTTP server, send requests with `fetch`, and
inspect the real HTTP responses, so they test the integration between routing,
validation, serialization, and Node's HTTP server.

---

## Listener

A function registered to execute when a particular event occurs.

An HTTP request listener executes when the server receives a request.

---

## localhost

A hostname referring to the local computer.

Common loopback IP:

127.0.0.1

---

## LTS

Long-Term Support.

A software release intended to receive maintenance and support for a
longer period than short-lived/current releases.

---

## MCP

Model Context Protocol.

A protocol for standardizing how AI applications communicate with external
tools and sources of context.

Important MCP concepts include:

- client
- server
- tools
- resources
- prompts
- transports

This topic will be explored later in LoadForge.

---

## Metadata

Data describing other data.

Example:

package.json contains metadata about the LoadForge package.

---

## Module

A unit of code that can expose functionality to other modules and consume
functionality from them.

LoadForge currently uses ECMAScript Modules.

---

## Parameter

A variable declared by a function to receive an input.

Example:

function greet(name) {}

`name` is a parameter.

See also: Argument.

---

## Path Parameter

A variable value embedded in a URL path and used to identify a particular
resource or supply routing information.

In `GET /titles/:id`, `:id` describes a path parameter. A request to
`/titles/1` supplies `1` as its value. The colon form documents the route
pattern; it is not sent literally by the client.

---

## PATH

An environment variable containing directories that the operating system
searches when resolving executable commands.

---

## PID

Process Identifier.

A numeric identifier assigned by the operating system to a running process.

---

## Port

A numbered communication endpoint used by network applications.

LoadForge currently listens on port 3000.

---

## Predicate

A function or expression that evaluates a condition and produces a boolean
result: `true` or `false`.

The callback passed to `titles.find()` is a predicate because it checks whether
each title's ID matches the requested ID.

---

## Process

A running instance of a program.

Executing:

node src/index.js

creates a Node.js process.

---

## Protocol

A defined set of rules governing communication between systems.

Examples:

HTTP
TCP
MCP

---

## Remote

A Git repository located somewhere other than the current local repository.

LoadForge's GitHub repository is configured as the remote named `origin`.

---

## Refactor

A change to the internal structure of code that preserves its intended
external behavior.

Separating server creation from the code that starts listening is a refactor
when the application's public HTTP behavior remains the same. The new structure
can make the application easier to test and maintain.

---

## Regression

An unintended return of a bug or loss of behavior that previously worked.

Automated tests provide regression protection by reporting when later changes
break behavior captured by existing assertions.

---

## Repository

A project tracked by a version-control system such as Git.

Often shortened to `repo`.

---

## Route

A combination of an HTTP method and path handled by an application.

Example:

GET /health

---

## Runtime

Software providing the environment necessary to execute code.

Node.js is a JavaScript runtime.

---

## Schema

A defined structure for data, including its expected fields, value types, and
constraints.

The title objects currently follow a simple informal schema with a numeric
`id` and string `title`. No external schema-validation library is currently in
use.

---

## Serialization

Converting an in-memory representation into a format suitable for storage
or transmission.

Example:

JSON.stringify()

converts a JavaScript value into JSON text.

---

## Server

Software that listens for requests and produces responses.

---

## stdout

Standard output.

A conventional output stream used by running processes for normal output.

console.log() commonly writes to stdout.

---

## Test Fixture

The known data or environment prepared for a test so that its results are
repeatable.

The in-memory titles and the application server created for the API tests form
part of LoadForge's test fixture.

---

## Test Hook

Code that runs at a defined point in the test lifecycle, such as before or
after tests.

LoadForge uses a `before` hook to start its test server and an `after` hook to
close it.

---

## Upstream Branch

The remote branch associated with a local Git branch.

Example:

local:
main

upstream:
origin/main

---

## Validation

Checking input against rules before accepting or processing it.

The title-detail route validates that its path parameter represents a positive
integer. Invalid values receive a `400 Bad Request` response.

---

## Working Directory

The directory from which a process is currently operating.

In Node.js:

process.cwd()

returns the current working directory.

---

## Working Tree

The files currently checked out and being edited in a Git repository.
