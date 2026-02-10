import { useState, useCallback, memo } from "react";

interface Todo {
  id: number;
  text: string;
}

// Memoized child component
const TodoItem = memo(function TodoItem({ 
  todo, 
  onDelete 
}: { 
  todo: Todo; 
  onDelete: (id: number) => void 
}) {
  console.log(`Rendering TodoItem: ${todo.text}`);
  return (
    <li className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <span className="text-gray-800">{todo.text}</span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded transition-colors"
      >
        Delete
      </button>
    </li>
  );
});

function UseCallbackExample() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn Hooks" },
    { id: 3, text: "Master TypeScript" },
  ]);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0); // Extra state to trigger re-renders

  // ✅ Same function reference between renders
  // Without useCallback, a NEW function is created every render,
  // which breaks React.memo on TodoItem (different prop = re-render)
  
  const handleDelete = useCallback((id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []); // Empty dependency array means this function never changes

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text: input }]);
    setInput("");
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        useCallback Example
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          What is useCallback?
        </h2>
        <p className="text-gray-600 mb-4">
          <code>useCallback</code> memoizes a function reference. It's crucial when passing callbacks to <code>memo</code>-wrapped children to prevent unnecessary re-renders.
        </p>
      </div>

      <div className="bg-green-50 rounded-lg p-6">
        <div className="mb-8 p-4 bg-white rounded border border-green-200">
            <h3 className="font-semibold text-gray-800 mb-2">Unrelated State Update</h3>
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => setCount(c => c + 1)}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                    Increment Count: {count}
                </button>
                <p className="text-sm text-gray-600">
                    Clicking this causes the parent to re-render. <br/>
                    Check console: <code>TodoItem</code>s should <strong>NOT</strong> re-render.
                </p>
            </div>
        </div>

        <form onSubmit={handleAdd} className="flex gap-2 mb-6">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
          <button 
            type="submit"
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Add
          </button>
        </form>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
          ))}
        </ul>
        
        {todos.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No todos left!</p>
        )}
      </div>
    </div>
  );
}

export default UseCallbackExample;
