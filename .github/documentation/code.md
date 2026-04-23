# Coding Convention

## Component Props
```typescript
interface CardProps {
  // 1. Content/Structural Props
  children: ReactNode;

  // 2. Core Data Props (Required)
  title: string;
  id: string;

  // 3. Core Data Props (Optional)
  description?: string;

  // 4. Styling Props (Usually last of the values)
  className?: string;

  // 5. Event Handlers
  onClick?: () => void;
}
```

## Inline Prop Order
1. `key` & `ref`: Always first. These are "special" React props that manage the element's identity and DOM access.
2. Required/Core Props: Crucial data props (e.g., `id`, `title`) go next so they are easy to spot.
3. Boolean Shorthands: Props like `disabled` or `isLoading` are often grouped together.
4. Static/Optional Props: General configurations.
5. `className` & `style`: Usually at the bottom of the data group to keep long tailwind strings from burying the logic.
6. Event Handlers (`on...`): Place these at the very end. They are typically the "noisiest" props with anonymous functions
