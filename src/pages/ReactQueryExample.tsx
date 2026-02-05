import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: number;
}

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const fetchProducts = async (): Promise<ProductResponse> => {
  const res = await fetch(
    "https://dummyjson.com/products?limit=10&skip=10&select=title,price,description,category,rating"
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function ReactQueryExample() {
  const [isEnabled, setIsEnabled] = useState(true);

  const { data, error, isLoading, isError, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5000, // Data is considered fresh for 5 seconds
    gcTime: 10 * 60 * 1000, // Unused data is garbage collected after 10 minutes
    enabled: isEnabled, // Query will only run if this is true
  });

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        React Query Example
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          How it works
        </h2>
        <p className="text-gray-600 mb-4">
          React Query handles fetching, caching, synchronizing and updating server
          state in your React applications. It provides a robust set of features
          for managing data.
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
          <h3 className="font-medium text-gray-800 mb-2">Query Options Demo:</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li><strong>staleTime:</strong> 5000ms (Data stays "fresh" for 5s)</li>
            <li><strong>gcTime:</strong> 10 mins (Cache kept for 10m after unused)</li>
            <li><strong>enabled:</strong> Controlled by checkbox below</li>
          </ul>
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="checkbox"
              id="enabled-toggle"
              checked={isEnabled}
              onChange={(e) => setIsEnabled(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="enabled-toggle" className="text-sm font-medium text-gray-700">
              Query Enabled
            </label>
          </div>
          {!isEnabled && (
            <p className="text-xs text-amber-600 mt-2">
              Query is currently disabled. No new requests will be made.
            </p>
          )}
          <div className="mt-2 text-xs text-gray-500">
             Status: {isFetching ? "Fetching..." : "Idle"} | 
             Data Status: {data ? "Available" : "Missing"}
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Products List
        </h3>

        {isLoading && (
          <div className="flex justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        )}

        {isError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            Error loading data: {(error as Error).message}
          </div>
        )}

        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800 text-lg truncate pr-2">
                    {product.title}
                  </h4>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    ${product.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded capitalize">
                    {product.category}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <span className="font-bold mr-1">{product.rating}</span>
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ReactQueryExample;
