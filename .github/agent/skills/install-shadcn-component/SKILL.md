# Install and Refactor shadcn Component

This skill automates the process of fetching a shadcn component, refactoring it into a flat, modular structure within the `@/app/_components/` directory, and cleaning up the configuration overhead.

## Instructions

1.  **Installation**
    * Run `npx shadcn-ui@latest add <DESIRED_COMPONENT>`.
    * **Prompt Responses:**
        * `Create components.json?`: Yes
        * `Component Library`: Base
        * `Preset`: Vega
    * *Note: Ensure the component is downloaded into the default `@/components/ui` directory.*

2.  **Refactoring Logic**
    * Locate the generated file at `@/components/ui/<DESIRED_COMPONENT>.tsx`.
    * For every **React Component** found in that file:
        * Create a new file: `@/app/_components/<DESIRED_COMPONENT>/<ComponentName>.tsx`.
        * Export using a `const` arrow function (e.g., `export const Button = (...) => { ... }`).
        * Auto-fix and resolve all relevant imports (e.g., `clsx`, `tailwind-merge`, or sub-components).
    * For every **Utility Function** or **Constant**:
        * Create a separate file in the same directory: `@/app/_components/<DESIRED_COMPONENT>/<Name>.ts`.
        * Export them individually.

3.  **Aggregation**
    * Create `@/app/_components/<DESIRED_COMPONENT>/index.ts`.
    * Add barrel exports for everything: `export * from './<FileName>';` for every file created in the previous step.

4.  **Cleanup & Restoration**
    * **Files:** Delete `components.json`.
    * **Directories:** Delete the `@/components/` directory and all its contents.
    * **Library:** Check git status; if the `@/lib` folder was newly created during this process, delete `@/lib`.
    * **Styles:** Revert/Undo all changes made to `@/app/globals.css` using git (e.g., `git checkout -- @/app/globals.css`).

---

### Implementation Example (Refactor Target)

> **Input Structure:**
> `@/components/ui/alert.tsx` containing `Alert` and `AlertDescription`.
>
> **Output Structure:**
> * `@/app/_components/alert/Alert.tsx`
> * `@/app/_components/alert/AlertDescription.tsx`
> * `@/app/_components/alert/index.ts` (Exporting both)
