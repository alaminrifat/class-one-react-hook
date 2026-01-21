import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          React Hooks Demonstration
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to this interactive demonstration of essential React hooks.
          Explore each example to understand how these hooks work and when to use them.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Link to="/useeffect" className="group">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 h-full">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 ml-3">
                useEffect
              </h2>
            </div>
            <p className="text-gray-700 mb-3">
              Perform side effects in function components. Handle data fetching,
              subscriptions, and lifecycle events.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Use cases:</strong> Data fetching, subscriptions, DOM manipulation, timers
            </p>
            <div className="mt-4 text-blue-600 font-semibold group-hover:text-blue-700">
              Explore →
            </div>
          </div>
        </Link>

        <Link to="/useeffectevent" className="group">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 h-full">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 ml-3">
                useEffectEvent
              </h2>
            </div>
            <p className="text-gray-700 mb-3">
              Extract non-reactive logic from effects. Access latest values without
              triggering re-runs.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Use cases:</strong> Event handlers in effects, stable callbacks, logging
            </p>
            <div className="mt-4 text-purple-600 font-semibold group-hover:text-purple-700">
              Explore →
            </div>
          </div>
        </Link>

        <Link to="/usetransition" className="group">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 h-full">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 ml-3">
                useTransition
              </h2>
            </div>
            <p className="text-gray-700 mb-3">
              Mark state updates as non-urgent. Keep UI responsive during expensive
              operations.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Use cases:</strong> Large lists, complex calculations, heavy components
            </p>
            <div className="mt-4 text-green-600 font-semibold group-hover:text-green-700">
              Explore →
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          📚 How to Use This Demo
        </h3>
        <p className="text-gray-700 mb-4">
          Navigate through the examples using the navigation bar above or click the cards.
          Each page includes:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="font-semibold text-gray-800 mb-2">✨ Live Demo</div>
            <div className="text-sm text-gray-600">Interactive examples you can play with</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="font-semibold text-gray-800 mb-2">💡 Explanations</div>
            <div className="text-sm text-gray-600">Clear descriptions of key concepts</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="font-semibold text-gray-800 mb-2">🎓 Best Practices</div>
            <div className="text-sm text-gray-600">Real-world usage patterns</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
