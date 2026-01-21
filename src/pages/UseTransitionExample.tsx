import { useState, useTransition } from "react";

function UseTransitionExample() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    // Mark this expensive update as non-urgent using startTransition
    startTransition(() => {
      // Generate a large list based on input (simulating expensive operation)
      const newList: string[] = [];
      for (let i = 0; i < 10000; i++) {
        newList.push(`${value} - Item ${i}`);
      }
      setList(newList);
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        useTransition Hook Example
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          What is useTransition?
        </h2>
        <p className="text-gray-600 mb-4">
          useTransition lets you mark certain state updates as non-urgent
          (transitions). React will keep the UI responsive by allowing urgent
          updates (like typing) to interrupt non-urgent updates (like rendering
          a large list).
        </p>
      </div>

      <div className="bg-green-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-green-900">
          Interactive Demo
        </h3>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">
            Type to filter 10,000 items:
          </label>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Start typing..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {isPending && (
          <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded">
            <p className="text-yellow-800 font-medium">
              ⏳ Updating list... (Non-urgent update in progress)
            </p>
          </div>
        )}

        <div className="mt-4 p-4 bg-white rounded border border-green-200">
          <p className="text-sm text-gray-600 mb-2">
            Total Items:{" "}
            <span className="font-bold">{list.length.toLocaleString()}</span>
          </p>
          <p className="text-sm text-gray-600 mb-3">Showing first 20 items:</p>
          <div className="max-h-64 overflow-y-auto space-y-1">
            {list.slice(0, 20).map((item, index) => (
              <div
                key={index}
                className="text-sm text-gray-700 py-1 px-2 bg-gray-50 rounded"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          How it works:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Input remains responsive:</strong> Typing updates
            immediately
          </li>
          <li>
            <strong>List update is non-urgent:</strong> Wrapped in
            startTransition
          </li>
          <li>
            <strong>isPending indicates state:</strong> Shows when transition is
            in progress
          </li>
          <li>
            <strong>Better UX:</strong> UI stays responsive during expensive
            updates
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-900">
          Without useTransition:
        </h3>
        <p className="text-gray-700 mb-2">
          If we didn't use useTransition, updating the large list would block
          the input field, making typing feel laggy. Try typing quickly - notice
          how smooth it stays!
        </p>
      </div>
    </div>
  );
}

export default UseTransitionExample;
