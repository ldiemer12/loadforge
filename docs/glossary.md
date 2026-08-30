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

## Upstream Branch

The remote branch associated with a local Git branch.

Example:

local:
main

upstream:
origin/main

---

## Working Directory

The directory from which a process is currently operating.

In Node.js:

process.cwd()

returns the current working directory.

---

## Working Tree

The files currently checked out and being edited in a Git repository.
