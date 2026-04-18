# Tailwindcss

## Theme
`:root`: Holds the "raw" data (the actual hex and oklch values). This allows you to easily swap them for Dark Mode later.
```css
:root {
  --background: oklch(100% 0 0);
  --foreground: oklch(0% 0 0);
  --primary: oklch(100% 0 0);
  --primary-foreground: oklch(0% 0 0);
  --secondary: oklch(100% 0 0);
  --secondary-foreground: oklch(0% 0 0);
}
```

`.dark`: Holds the "dark mode" values. If the user enables dark mode, Tailwind will override the values in :root with these.
```css
.dark {
  --background: oklch(0% 0 0);
  --foreground: oklch(100% 0 0);
  --primary: oklch(0% 0 0);
  --primary-foreground: oklch(100% 0 0);
  --secondary: oklch(0% 0 0);
  --secondary-foreground: oklch(100% 0 0);
}
```

To streamline, we can write
```css
@theme {
  --color-primary: oklch(0% 0 0);
}
```
When the Tailwind compiler sees `@theme` block, it automatically handles the `:root` declaration for you. Tailwindcss will only generate the root and utility classes if it was used in the code.
```css
:root {
  --color-primary: oklch(0% 0 0);
}

/* Plus all the utility classes that point to those variables. */
.text-primary { color: var(--color-primary); }
.bg-primary { background-color: var(--color-primary); }
```

If you add a `@theme dark { ... }` block, Tailwind will automatically handle the variable swapping inside the appropriate media query or class selector without you writing any extra CSS logic. It inherits everything from your base `@theme`. It only changes the variables you explicitly list. Everything else (like spacing, fonts, and other colors) stays exactly as it was defined in the base theme or the Tailwind defaults. Tailwind wraps these variables in a media query (usually `@media (prefers-color-scheme: dark)`) or a `.dark` class selector.

For Tailwind to recognize your custom variables and turn them into utilities (like text-primary), they must follow the naming convention:
- `--color-*` becomes `text-*`, `bg-*`, `border-*`
- `--font-*` becomes `font-*`
- `--spacing-*` becomes `m-*`, `p-*`, `w-*`, `h-*`
- `--shadow-*` becomes `shadow-*`
- `--radius-*` becomes `rounded-*`
- `--animate-*` becomes `animate-*`

Reference: https://tailwindcss.com/docs/theme#theme-variable-namespaces

### `@theme` vs `@theme inline` vs `@theme static`
#### `@theme`
When you use a standard `@theme` directive, Tailwind acts like a smart editor. It looks at the default Tailwind theme and says: "If you already have a variable with this name, I will replace it. If you don't, I will add it."
- Example: If you define `--color-blue-500: #ff0000;`, you have overwritten the original Tailwind blue.
- Example: If you define `--color-primary: #5ef0a5;`, you have added a new color.

#### `@theme inline`
The `@theme inline` directive maps theme utilities directly to existing CSS values or variables, bypassing the creation of a new CSS variable. It is primarily used to alias existing design tokens, ensuring cleaner output and avoiding variable re-declaration.

```css
@theme inline {
  --color-brand: oklch(0% 0 0);
}
```
By default, the output css will not include this if it is not used. I.E. no variable is created in `:root` and no utility class is created.

If used,
```html
<div className="bg-brand h-20 w-20">Example</div>
```
Then the output css will contain the utility class, but no variable is created in the `:root`.
```css
@layer utilities {
  .bg-brand {
    background-color: #000;
    background-color: lab(0% 0 0);
  }
}
```

Using inline prevents potential CSS resolution issues where a variable might point to another variable that doesn't exist yet in the cascade.

When you use a standard `@theme`, Tailwind creates a double reference.
Imagine you have a variable coming from an external source (like a CMS or a legacy CSS file) called `--user-choice`. You try to map it in Tailwind:
```css
@theme {
  --color-brand: var(--user-choice);
}
```

Tailwind compiles this into your CSS like this:
```css
:root {
  --color-brand: var(--user-choice);
}

@layer utilities {
  .bg-brand {
    background-color: var(--color-brand);
  }
}
```

The Risk: If --user-choice is defined in a different CSS file that loads after Tailwind, or inside a specific container (like .dark-mode { --user-choice: blue; }), the browser might get confused/unsure about the value of --color-brand.

When you use `@theme inline`
```css
@theme inline {
  --color-brand: var(--user-choice);
}
```

Tailwind will not put --color-brand into the :root. Instead, it looks at your HTML, sees bg-brand, and writes the CSS like this:
```css
@layer utilities {
  .bg-brand {
    background-color: var(--user-choice);
  }
}
```

The utility class now talks directly to the source variable (`--user-choice`). This prevents issues where the intermediate variable (`--color-brand`) might have been overwritten or failed to resolve because of where it sat in the CSS cascade.

Reference: https://tailwindcss.com/docs/theme#referencing-other-variables

#### `@theme static`
By default only used CSS variables will be generated in the final CSS output. If you want to always generate the CSS variables, you can use the `static` theme option. I.E. It will always generate the variable in `:root`. If prefixed with tailwindcss utility class prefix and when in used, it will then generate the utility class.

Example:
```css
@theme static {
  --brand: oklch(0% 0 0);
}
```
Will become
```css
:root {
  --brand: oklch(0% 0 0);
}
```
If using tailwindcss utility class prefix,
```css
@theme static {
  --color-brand: oklch(0% 0 0);
}
```
Will become
```css
:root {
  --color-brand: oklch(0% 0 0);
}

/* Will only generate utility class if it was actually used */
@layer utilities {
  .bg-brand {
    background-color: #000;
    background-color: lab(0% 0 0);
  }
}
```

## Layers
In Tailwind CSS, layers are ordered from lowest priority (least specific) to highest priority (most specific). This ensures that a utility class can always override a component style, which can in turn override a base style.

1. Base Layer (Lowest Priority): Contains global resets and default element styles (like h1 or body). These are the foundations that everything else builds upon. So that other layers or inline styles can override the base styles easily.
2. Components Layer: Contains reusable classes like .btn or .card. These override the base styles but are designed to be tweaked by utilities.
3. Utilities Layer (Highest Priority): Contains single-purpose classes like text-center or mt-4. Because this layer is output last, these classes will always "win" if there is a conflict with a style from the base or component layers.
Any css declared outside of `@layer` will be placed in the utilities layer. This means if you later try to override the css on a specific page, your css might "win" and prevent the change from appearing and no overriding done.

Reference: https://tailwindcss.com/docs/theme#generating-all-css-variables

## References
- Class Sorting Order: https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted
- Colors: https://tailwindcss.com/docs/color
