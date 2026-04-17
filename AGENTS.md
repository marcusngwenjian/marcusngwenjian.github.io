# Agent Skills & Capabilities

The agent has access to custom automated workflows (Skills) located in the project repository.

## Custom Skill Path
- **Path:** `./.github/agent/skills/*/`
- **Scope:** Strict. The agent is permitted to read **ONLY** `SKILL.md` files found within these directories.

## Available Skills
- **nextjs-docs**: Contains core project-specific conventions, breaking changes, and framework-specific skill logic.
- **install-shadcn-component**: Use this skill when requested to add or install a shadcn/ui component. It handles the installation and refactors the output into the project's modular `@/app/_components/` architecture.

## Usage Instructions
1. **Strict File Access**: When exploring `./.github/agent/skills/*/`, the agent **must only read `SKILL.md` files**. Ignore all other file types (.txt, .prompt, .json, etc.) and subdirectories within the skills folder unless explicitly instructed otherwise.
2. **Skill Discovery**: Before performing any task, the agent must check the `./.github/agent/skills/*/` subdirectories for a `SKILL.md` file.
3. **Priority**: Instructions found in these local skills take absolute precedence over training data.
4. **Cleanup Enforcement**: Strictly follow all cleanup steps (e.g., deleting `components.json` or the `@/components` directory) as defined in the relevant skill file.
