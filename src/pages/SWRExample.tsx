import useSWR from "swr";

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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SWRExample() {
  const { data, error, isLoading } = useSWR<ProductResponse>(
    "https://dummyjson.com/products?limit=10&skip=10&select=title,price,description,category,rating",
    fetcher
  );

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">SWR Example</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          How it works
        </h2>
        <p className="text-gray-600 mb-4">
          SWR (Stale-While-Revalidate) is a strategy to first return the data
          from cache (stale), then send the fetch request (revalidate), and
          finally come with the up-to-date data.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Products List
        </h3>

        {isLoading && (
          <div className="flex justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            Error loading data: {error.message}
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
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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

export default SWRExample;
