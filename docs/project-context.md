# LoadForge Project Context

## Purpose

LoadForge is a learning-focused backend and performance engineering project.

The goal is to build a realistic backend application from scratch while
developing practical knowledge of software development, APIs, automated
testing, performance engineering, databases, containers, observability,
CI/CD, cloud infrastructure, and AI development tooling.

The project prioritizes deep understanding over speed. Technologies should
be introduced when there is a concrete reason to use them rather than simply
adding tools for the sake of expanding the technology stack.

## Learning Principles

- Do not skip foundational concepts.
- Understand why code and configuration exist before adding more complexity.
- Use correct technical terminology and explain unfamiliar jargon.
- Prefer official documentation and current best practices.
- Favor hands-on experiments over passive reading.
- Keep the project enjoyable and practical.
- Prefer free and local tooling when possible.
- Build the project incrementally with small, coherent Git commits.
- Use feature branches and pull requests for meaningful milestones.

## Current Technology

- Windows
- Visual Studio Code
- Google Chrome
- Git
- GitHub
- Node.js 24 LTS
- npm
- JavaScript
- ECMAScript Modules

## Current Application

The application currently uses Node.js's built-in HTTP module.

The server listens on port 3000.

Current routes include:

### GET /

Returns a basic LoadForge response.

### GET /health

Returns a JSON health response.

Example:

{
"status": "ok",
"service": "loadforge"
}

Unknown routes return:

404 Not Found

## Concepts Covered So Far

Environment and tooling:

- terminal
- shell
- CLI
- PATH
- environment variables
- Node.js runtime
- npm
- Git

Git:

- repository
- working tree
- staging area / index
- commits
- commit hashes
- HEAD
- branches
- remotes
- origin
- upstream branches
- push
- diff
- atomic commits
- line-ending normalization
- .gitattributes

Node / JavaScript:

- const
- variables
- strings
- template literals
- interpolation
- process
- PID
- stdout
- current working directory
- relative and absolute paths
- ES Modules
- import
- named imports
- functions
- parameters
- arguments
- objects

HTTP:

- client
- server
- request
- response
- listener
- event-driven programming
- port
- localhost
- HTTP methods
- routes
- status codes
- headers
- response body
- JSON
- serialization
- health check endpoint

## Current Git Workflow

The default branch is:

main

Feature work should normally occur on dedicated branches.

Typical workflow:

main
→ feature branch
→ small commits
→ push branch
→ pull request
→ review
→ merge

## Planned Learning Progression

JavaScript
→ Node.js
→ HTTP
→ Express
→ REST API design
→ PostgreSQL
→ SQL and query optimization
→ automated testing
→ TypeScript
→ Docker
→ k6
→ CI/CD with GitHub Actions
→ Prometheus / Grafana
→ Grafana Cloud
→ Redis
→ OpenTelemetry
→ security testing
→ GraphQL
→ MCP
→ AWS
→ Terraform
→ Kafka
→ Kubernetes and scaling experiments

## AI Development Tooling

ChatGPT is being used primarily as the learning and mentoring environment.

Codex in Visual Studio Code is used as a repository-aware development
assistant.

The project will eventually include MCP (Model Context Protocol) learning,
including both using existing MCP servers and building an MCP server.

Claude is also relevant because MCP is used extensively in the user's
work environment.
