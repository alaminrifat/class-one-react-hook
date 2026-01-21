import { useState, useEffect } from "react";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function UseEffectExample() {
  const [count, setCount] = useState(5);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const fetchComments = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }

      const data: Comment[] = await response.json();
      setComments(data.slice(0, count)); // Get first 5 comments
      setLoading(false);
    } catch (err: Error | unknown) {
      const message =
        err instanceof Error ? err.message : "Failed to load comments";
      setError(message);
      setLoading(false);
      console.error("❌ Error fetching comments:", err);
    }
  };

  useEffect(() => {
    console.log("I am coming in");
    fetchComments();

    return () => {
      console.log("I am going out");
    };
  }, [count]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        useEffect Hook Example
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          What is useEffect?
        </h2>
        <p className="text-gray-600 mb-4">
          useEffect lets you perform side effects in function components. It
          runs after the render and can be configured to run on mount, on
          updates, or when specific dependencies change.
        </p>
      </div>

      {/* Fetched Comments Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border-l-4 border-blue-500">
        <h3 className="text-lg font-semibold mb-4 text-blue-900">
          📡 Data Fetching with Cleanup
        </h3>

        {loading && (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-blue-600 font-medium">
              Loading comments...
            </span>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <strong>Error:</strong> {error}
          </div>
        )}

        {!loading && !error && comments.length > 0 && (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {comment.name}
                  </h4>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    #{comment.id}
                  </span>
                </div>
                <p className="text-xs text-blue-600 mb-2">{comment.email}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {comment.body}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-purple-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-purple-900">{count}</h3>
        <div className="mb-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Fetch again
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          🔑 Key Points:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Empty dependency array [] means effect runs once on mount</li>
          <li>No dependency array means effect runs on every render</li>
          <li>With dependencies [count], effect runs when count changes</li>
          <li>Return a cleanup function to clean up side effects</li>
          <li>
            <strong>isMounted flag</strong> prevents state updates after unmount
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border-l-4 border-green-500">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          ✨ Cleanup Examples in This Page:
        </h3>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-start">
            <span className="mr-2">🛑</span>
            <p>
              <strong>Fetch Cleanup:</strong> isMounted flag prevents state
              updates if component unmounts before fetch completes
            </p>
          </div>
          <div className="flex items-start">
            <span className="mr-2">⏰</span>
            <p>
              <strong>Timer Cleanup:</strong> clearTimeout prevents memory leaks
              by clearing timers on re-render or unmount
            </p>
          </div>
          <div className="flex items-start">
            <span className="mr-2">📋</span>
            <p>
              <strong>Check Console:</strong> Open browser console to see
              cleanup messages when effects re-run
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseEffectExample;
