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
    * **Pattern Discovery:** Before writing any code, examine existing subdirectories in `@/app/_components/`. Identify and replicate established patterns for:
        * Component declaration (e.g., arrow functions vs. declarations).
        * Prop types (e.g., `type` vs. `interface`).
        * Strictly ignore imports to `@/lib/utils`. Force all components to import `cn` from `@/app/_utilities/classname`.
    * For every **React Component** found in that file:
        * **File Creation:** Create a new file: `@/app/_components/<DESIRED_COMPONENT>/<ComponentName>.tsx`.
        * **Prop Type Extraction:** Transform inline prop definitions into a formal type alias named <ComponentName>Props
          * **Example**: Convert `({ className, ...props }: ComponentProps<"span">)` to `type AvatarBadgeProps = ComponentProps<"span">;` defined above the component.
          * **Polymorphism Note:** If the source uses `React.ComponentPropsWithoutRef<typeof Primitive>`, ensure the refactored type uses the same utility to preserve polymorphic behavior and ref-forwarding compatibility.
        * **Component Export:** Export using a `const` arrow function (e.g., `export const Button = (...) => { ... }`).
        * **Auto-fix:** Resolve all relevant imports (e.g., `clsx`, `tailwind-merge`, or sub-components).
    * For every **Constant or Variant**:
        * **Consolidation Rule:** Do not create separate files for every constant. Instead, consolidate all non-component logic into: `@/app/_components/<DESIRED_COMPONENT>/lib/constants.ts`.
        * **Variant Mapping (Enums):** For all `cva` variant groups (e.g., `variant`, `size`), transform the raw strings into camelCase `as const` objects.
          * Naming: `<componentName><VariantGroup>` (e.g., `buttonVariant`, `buttonSize`).
          * Mapping: Map descriptive keys to the shadcn string values (e.g., `default: "default"`, `small: "sm"`).
        * **CVA Implementation:** In the component file, import these constants and use computed property names (e.g., `[buttonVariant.default]: "..."`) to define the styles within the `cva` function.
        * **Collision Prevention:** If multiple components share the same constant file, ensure every constant is prefixed with the component name to prevent barrel export conflicts in the `index.ts`
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

### Implementation Example (Mapping Pattern)

**From (shadcn source):**
```typescript
const buttonVariants = cva("...", {
  variants: {
    variant: { default: "...", outline: "..." },
    size: { default: "...", sm: "..." }
  }
})
```

**To (Refactored):**
* `lib/constants.ts`
  ```typescript
  export const buttonVariant = {
    default: "default",
    outline: "outline",
  } as const;

  export const buttonSize = {
    default: "default",
    small: "sm",
  } as const;
  ```
* `Button.tsx`
  ```typescript
  import { buttonVariant, buttonSize } from "./lib/constants";

  const buttonVariants = cva("...", {
    variants: {
      variant: { [buttonVariant.default]: "...", [buttonVariant.outline]: "..." },
      size: { [buttonSize.default]: "...", [buttonSize.small]: "..." },
    },
    defaultVariants: {
      variant: buttonVariant.default,
      size: buttonSize.default,
    }
  });
  ```
