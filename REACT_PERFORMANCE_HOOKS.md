# React Performance Hooks: memo, useMemo, and useCallback

This guide explains the three primary tools React provides for performance optimization: `React.memo`, `useMemo`, and `useCallback`. These tools help prevent unnecessary re-renders and expensive recalculations.

## 1. React.memo

`React.memo` is a **Higher-Order Component (HOC)** used to wrap a functional component. It memoizes the rendered output of the wrapped component then skips unnecessary renderings.

### How it works
If the **props** passed to the component haven't changed, React skips rendering the component and reuses the last rendered result.

### Example
(Reference: `src/pages/MemoExample.tsx`)

```tsx
import { memo } from "react";

// This component will ONLY re-render if the 'name' prop changes
const Greeting = memo(function Greeting({ name }: { name: string }) {
  console.log("Greeting rendered!");
  return <h1>Hello, {name}!</h1>;
});

// Usage
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      {/* Changing count triggers Parent re-render, but Greeting stays cached */}
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Greeting name="Alice" />
    </>
  );
}
```

### When to use
- Pure functional components.
- Components that re-render often with the exact same props.
- Large/heavy UI components where re-rendering is expensive.

---

## 2. useMemo

`useMemo` is a **Hook** that memoizes the **result of a calculation**. It caches the return value of a function.

### How it works
It runs the "create" function only when one of the dependencies has changed. If dependencies stay the same, it returns the cached value.

### Example
(Reference: `src/pages/UseMemoExample.tsx`)

```tsx
import { useMemo, useState } from "react";

function ProductList({ products, filterText }) {
  // Expensive calculation: filtering a large array
  const filteredProducts = useMemo(() => {
    console.log("Filtering products..."); // Only runs when dependencies change
    return products.filter(product => product.includes(filterText));
  }, [products, filterText]); // Dependencies

  return (
    <ul>
      {filteredProducts.map(p => <li key={p}>{p}</li>)}
    </ul>
  );
}
```

### When to use
- Expensive calculations (e.g., filtering/sorting large arrays, complex math).
- Referential equality: To ensure an object or array reference stays stable so it doesn't trigger re-renders in child components (e.g., when passed as a prop or dependency).

---

## 3. useCallback

`useCallback` is a **Hook** that memoizes a **function definition**. It caches the function instance itself.

### How it works
It returns a memoized version of the callback that only changes if one of the dependencies has changed.

### Why do we need it?
In JavaScript, `function() {} !== function() {}`. Every time a component re-renders, all functions inside it are recreated with new references. If you pass these functions to a child component wrapped in `React.memo`, the child will see a "new" prop and re-render anyway, defeating the purpose of `React.memo`.

### Example
(Reference: `src/pages/UseCallbackExample.tsx`)

```tsx
import { useCallback, useState, memo } from "react";

// Child component wrapped in memo
const TodoItem = memo(({ onDelete }) => {
  console.log("TodoItem rendered");
  return <button onClick={onDelete}>Delete</button>;
});

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  // Without useCallback, this function is recreated on every render
  // causing TodoItem to re-render even if 'count' changed
  const handleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, []); // Empty deps: function reference never changes

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      {todos.map(todo => (
        <TodoItem key={todo.id} onDelete={handleDelete} />
      ))}
    </>
  );
}
```

### When to use
- Passing callbacks to optimized child components (wrapped in `React.memo`).
- Passing callbacks as dependencies to other hooks (e.g., `useEffect`).

---

## Summary Comparison

| Feature | `React.memo` | `useMemo` | `useCallback` |
| :--- | :--- | :--- | :--- |
| **What it memoizes** | A **Component** (Render result) | A **Value** (Result of a function) | A **Function** (The definition itself) |
| **Purpose** | Prevent component re-renders | Prevent expensive recalculations | Prevent function recreation (preserve referential identity) |
| **Primary Use Case** | Pure components with stable props | Heavy computation / Stable object references | Callbacks passed to children or used in deps arrays |

