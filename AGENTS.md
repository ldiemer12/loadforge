# LoadForge Codex Instructions

LoadForge is a learning-focused backend and performance engineering project.

## Primary Goal

The user is learning software engineering, backend development, testing,
performance engineering, and related tooling from first principles.

Deep understanding is more important than speed.

## Teaching Rules

- Do not skip foundational steps.
- Explain commands before asking the user to run them.
- Use correct technical terminology and define unfamiliar jargon.
- Explain why a decision is considered a best practice.
- Prefer official documentation from the technology vendor or project.
- Distinguish official guidance from general industry convention.
- Do not generate large amounts of code without explaining it.
- Prefer having the user implement concepts after one guided example.
- Keep the project fun, experimental, practical, and learning-focused.
- Minimize costs and prefer free/local tooling.
- Do not introduce a technology until there is a concrete reason for it.
- Do not hide complexity merely to make a task easier.
- When reviewing code, explain the reasoning behind recommendations.

## Project Documentation

The `docs/` directory is the source of truth for evolving project knowledge.

- `docs/project-context.md`
  - Current architecture, stack, application behavior, major decisions,
    milestones, and project status.

- `docs/glossary.md`
  - Technical vocabulary introduced during the project.

- `docs/learning-log.md`
  - Chronological learning/session notes.

`README.md` is the public-facing introduction to the project.

Keep `AGENTS.md` focused primarily on durable instructions rather than
frequently changing application details.

## Documentation Maintenance

When Codex makes a meaningful repository change:

1. Update `docs/project-context.md` if the architecture, stack, commands,
   routes, project structure, or current project state changed.

2. Update `docs/glossary.md` when the work introduces an important technical
   term that is not already documented.

3. Update `README.md` only when a change affects information useful to someone
   viewing or using the project, such as setup, features, usage, architecture,
   or prerequisites.

4. Do not claim in `docs/learning-log.md` that the user learned or understood
   something unless the user has demonstrated or stated that.
   Codex may propose or draft a learning-log entry for user review after a
   meaningful learning session.

5. Do not make documentation changes merely for churn. Update documentation
   only when there is meaningful new information.

6. Keep documentation consistent with the implementation. If documentation
   and code disagree, call out the discrepancy instead of guessing.

## Current Environment

- Windows
- Visual Studio Code
- Google Chrome for browser testing
- Node.js 24 LTS
- npm
- JavaScript using ECMAScript Modules
- Git and GitHub

For the current application state and planned progression, read:

`docs/project-context.md`

## Current Commands

Start the application:

`npm start`

When new standard project commands are introduced, update this section or
point to the canonical command documentation.

## Git Workflow

Prefer feature branches instead of committing feature work directly to `main`.

Use small, coherent, atomic commits.

Before recommending a commit:

1. Review `git status`.
2. Review `git diff`.
3. Stage only related changes.
4. Review `git diff --staged`.

Recommend a commit when one coherent change is complete.

Recommend pushing meaningful committed work to GitHub:

- at the end of a productive session,
- before risky experimentation,
- or when remote backup/review is valuable.

Recommend a Pull Request when a feature branch represents a complete,
reviewable milestone.

Do not automatically commit, push, merge, create branches, or create Pull
Requests unless the user explicitly asks Codex to perform that action.

When suggesting a commit, also suggest an appropriate Conventional Commit
message.

## Change Discipline

Before modifying files:

- Inspect the relevant existing implementation.
- Explain significant proposed changes.
- Avoid unrelated refactoring.
- Prefer the smallest change that teaches or solves the current problem.
- Do not add dependencies without explaining why they are needed.
- Do not introduce tools solely because they are popular.
- Do not silently change architecture.

After modifying code:

- Review the diff.
- Run relevant existing validation commands.
- Report what was changed and what was validated.
- Identify anything that remains unverified.

## Security and Cost

- Never commit credentials, API keys, tokens, passwords, or secrets.
- Prefer environment variables for secrets when they become necessary.
- Prefer free and local tooling.
- Before recommending a paid service or billable cloud resource, explain:
  - why it is useful,
  - the expected cost,
  - and the free alternative.

## AI and MCP Learning

MCP (Model Context Protocol) is part of the planned learning curriculum.

When MCP is introduced:

- teach vendor-neutral MCP concepts first,
- define MCP clients, servers, tools, resources, prompts, and transports,
- explain security and permission implications,
- relate concepts to Claude/Claude Code where useful,
- and distinguish MCP from vendor-specific agent instruction files.

Do not add MCP configuration merely to demonstrate MCP.
Introduce it when the project has a meaningful use case.
