import { useState, memo } from "react";

// ❌ Without memo: re-renders every time Parent renders
// ✅ With memo: only re-renders when `name` prop changes
const Greeting = memo(function Greeting({ name }: { name: string }) {
  console.log("Greeting rendered!");
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800">Hello, {name}!</h2>
      <p className="text-xs text-gray-500 mt-1">
        (Check console: I only re-render when name changes)
      </p>
    </div>
  );
});

function MemoExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alice");

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        React.memo Example
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          What is React.memo?
        </h2>
        <p className="text-gray-600 mb-4">
          <code>React.memo</code> is a higher-order component that prevents a
          child component from re-rendering if its props haven't changed.
        </p>
      </div>

      <div className="bg-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-purple-900">
          Interactive Demo
        </h3>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Increment Count: {count}
            </button>
            <span className="text-sm text-gray-600">
              (Clicking this updates Parent state but keeps 'name' prop same)
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-gray-700 font-medium">Change Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div className="mt-8">
            <Greeting name={name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoExample;
