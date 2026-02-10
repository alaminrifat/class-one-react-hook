import { useState, useMemo } from "react";

function UseMemoExample() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  
  // Mock large dataset
  const products = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Product ${i} - ${Math.random().toString(36).substring(7)}`,
  }));

  // ✅ Only recalculates when `products` or `search` change
  // Toggling darkMode won't trigger this expensive filter
  const filtered = useMemo(() => {
    console.log("Filtering...");
    const startTime = performance.now();
    
    // Artificial delay to simulate expensive calculation
    let i = 0;
    while(i < 10000000) { i++ }

    const result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    
    const endTime = performance.now();
    console.log(`Filter took ${endTime - startTime}ms`);
    return result;
  }, [products, search]); // Note: In a real app, products should be memoized too if it comes from props

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto p-8">
        <h1 className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}>
          useMemo Example
        </h1>

        <div className={`${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"} rounded-lg shadow-md p-6 mb-6 transition-colors duration-300`}>
          <h2 className={`text-xl font-semibold mb-4 ${darkMode ? "text-gray-100" : "text-gray-700"}`}>
            What is useMemo?
          </h2>
          <p className="mb-4">
            <code>useMemo</code> caches the result of an expensive calculation. It only recalculates when dependencies change.
          </p>
          <p className="text-sm italic">
            (Check console logs to see when filtering actually happens vs when it is skipped)
          </p>
        </div>

        <div className={`rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-indigo-50"}`}>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              Toggle Theme (Current: {darkMode ? "Dark" : "Light"})
            </button>
            
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${
                darkMode 
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-indigo-400 placeholder-gray-400" 
                  : "bg-white border-gray-300 text-gray-900 focus:ring-indigo-500"
              }`}
            />
          </div>

          <div className={`h-64 overflow-y-auto rounded border ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}>
            {filtered.length > 0 ? (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {filtered.map((p) => (
                  <li key={p.id} className={`px-4 py-2 ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-50"}`}>
                    {p.name}
                  </li>
                ))}
              </ul>
            ) : (
              <div className={`p-4 text-center ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                No products found
              </div>
            )}
          </div>
          <p className={`mt-2 text-xs ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
            Showing {filtered.length} items
          </p>
        </div>
      </div>
    </div>
  );
}

export default UseMemoExample;
