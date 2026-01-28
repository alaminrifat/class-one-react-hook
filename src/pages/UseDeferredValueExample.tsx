import { useState, useDeferredValue, memo, useMemo } from "react";

const SlowList = memo(function SlowList({ text }: { text: string }) {
  const items = useMemo(() => {
    const result = [];
    // Artificially slow down rendering
    const start = performance.now();
    while (performance.now() - start < 20) {
      // Burn 20ms per render to simulate expensive calculation
    }
    
    for (let i = 0; i < 5000; i++) {
      if (text === "" || `Item #${i} containing ${text}`.toLowerCase().includes(text.toLowerCase())) {
        result.push(<li key={i} className="py-2 border-b border-gray-100 last:border-0">
          Item #{i} {text && <span className="bg-yellow-200">matches "{text}"</span>}
        </li>);
      }
    }
    return result;
  }, [text]);

  return (
    <ul className="bg-white rounded-lg shadow-sm border border-gray-200 px-4 max-h-[400px] overflow-y-auto">
      {items.length > 0 ? items : <li className="py-4 text-gray-500 text-center">No matches found</li>}
    </ul>
  );
});

function UseDeferredValueExample() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        useDeferredValue Hook Example
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          What is useDeferredValue?
        </h2>
        <p className="text-gray-600 mb-4">
          useDeferredValue lets you defer updating a part of the UI. It is similar to debouncing, 
          but integrated with React's rendering cycle. It allows the input to update immediately 
          while the heavy list updates later when the main thread is free.
        </p>
      </div>

      <div className="bg-indigo-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-indigo-900">
          Interactive Demo
        </h3>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">
            Type to filter (simulated slow list):
          </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type quickly..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <p className="mt-2 text-sm text-gray-500">
            Immediate Value: <span className="font-mono font-bold text-gray-800">"{query}"</span>
          </p>
          <p className="text-sm text-gray-500">
            Deferred Value: <span className={`font-mono font-bold transition-colors ${isStale ? "text-red-500" : "text-green-600"}`}>"{deferredQuery}"</span>
          </p>
        </div>

        <div className={`transition-opacity duration-200 ${isStale ? "opacity-50" : "opacity-100"}`}>
            <h4 className="font-semibold text-gray-700 mb-2">Results:</h4>
            <SlowList text={deferredQuery} />
        </div>
      </div>
    </div>
  );
}

export default UseDeferredValueExample;
