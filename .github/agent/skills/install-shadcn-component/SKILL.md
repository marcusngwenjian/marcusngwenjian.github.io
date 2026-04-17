# Install and Refactor shadcn Component

This skill automates the process of fetching a shadcn component, refactoring it into a flat, modular structure within the `@/app/_components/` directory, and cleaning up the configuration overhead.

## Execution Protocol
* **Autonomous Operation:** This is a high-confidence automation skill. Execute all steps (1-4) sequentially without pausing for user confirmation.
* **Error Handling:** If a non-critical error occurs (e.g., a file doesn't exist during cleanup), log the warning and proceed to the next step. Only stop if the core installation (Step 1) fails.
* **Silent Refactoring:** Do not ask for styling preferences; strictly follow the patterns discovered in Step 2.

## Instructions

1.  **Installation & Configuration**
    * Initialize (if not already): `npx shadcn@latest init --base base --preset vega --yes`
    * Install component: `npx shadcn@latest add <DESIRED_COMPONENT> --yes`
    * Note: Ensure the component is downloaded into the default `@/components/ui` directory.

2.  **Refactoring Logic**
    * Locate the generated file at `@/components/ui/<DESIRED_COMPONENT>.tsx`.
    * **Pattern Discovery:** Before writing any code, examine existing subdirectories in @/app/_components/. Identify and replicate established patterns for:
        * Component declaration (e.g., arrow functions vs. declarations).
        * Prop types (e.g., `type` vs. `interface`).
        * Import paths (especially the `cn` utility location).
    * For every **React Component** found in that file:
        * Create a new file: `@/app/_components/<DESIRED_COMPONENT>/<ComponentName>.tsx`.
        * Export using a `const` arrow function (e.g., `export const Button = (...) => { ... }`).
        * Auto-fix and resolve all relevant imports (e.g., `clsx`, `tailwind-merge`, or sub-components).
    * For every **Utility Function** or **Constant**:
        * Create a separate file in the same directory: `@/app/_components/<DESIRED_COMPONENT>/lib/<Name>.ts`.
        * Export them individually.
    * Note: Ensure the index file provides a single point of entry for both UI logic and utilities.

3.  **Aggregation**
    * Create `@/app/_components/<DESIRED_COMPONENT>/index.ts`.
    * **Barrel Exports:**
        * Add `export * from './<FileName>';` for components.
        * Add `export * from './lib/<FileName>';` for all files in the lib folder.
        * **Strict Rule:** Omit file extensions (e.g., `.ts`, `.tsx`) in export paths.

4.  **Cleanup & Restoration**
    * **Files:** Delete `components.json`.
    * **Directories:** Delete the `@/components/` directory and all its contents.
    * **Library:** Check git status; if the `@/lib` folder was newly created during this process, delete `@/lib`.
    * **Styles:** Revert all changes made to `@/app/globals.css` using git (e.g., `git checkout -- @/app/globals.css`).

---

### Implementation Example (Refactor Target)

**Input Structure:**
`@/components/ui/alert.tsx` containing `Alert`, `AlertDescription`, `alertVariants`.

**Output Structure:**
* `@/app/_components/alert/Alert.tsx`
* `@/app/_components/alert/AlertDescription.tsx`
* `@/app/_components/alert/lib/constants.ts`
* `@/app/_components/alert/index.ts` (Exporting all components and utilities)
  * *Content:*
    ```typescript
    export * from './Alert';
    export * from './AlertDescription';
    export * from './lib/constants';
    ```
