import { Link } from "react-router-dom";

const Home = () => {
  const examples = [
    {
      to: "/useeffect",
      title: "useEffect",
      desc: "Perform side effects in function components.",
      color: "blue",
      icon: "⚡"
    },
    {
      to: "/useeffectevent",
      title: "useEffectEvent",
      desc: "Extract non-reactive logic from effects.",
      color: "purple",
      icon: "🎯"
    },
    {
      to: "/usetransition",
      title: "useTransition",
      desc: "Mark state updates as non-urgent.",
      color: "green",
      icon: "🚀"
    },
    {
      to: "/useformstatus",
      title: "useFormStatus",
      desc: "Access form submission status.",
      color: "orange",
      icon: "📝"
    },
    {
      to: "/usedeferredvalue",
      title: "useDeferredValue",
      desc: "Defer updating a part of the UI.",
      color: "indigo",
      icon: "⏳"
    },
    {
      to: "/memo",
      title: "React.memo",
      desc: "Skip re-rendering a component.",
      color: "pink",
      icon: "🧠"
    },
    {
      to: "/usememo",
      title: "useMemo",
      desc: "Cache the result of a calculation.",
      color: "yellow",
      icon: "💾"
    },
    {
      to: "/usecallback",
      title: "useCallback",
      desc: "Cache a function definition.",
      color: "teal",
      icon: "🔄"
    },
    {
      to: "/swr",
      title: "SWR",
      desc: "Stale-While-Revalidate data fetching.",
      color: "cyan",
      icon: "📡"
    },
    {
      to: "/react-query",
      title: "React Query",
      desc: "Powerful asynchronous state management.",
      color: "rose",
      icon: "🔮"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          React Hooks Demonstration
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to this interactive demonstration of essential React hooks and patterns.
          Explore each example to understand how they work and when to use them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {examples.map((ex) => (
          <Link key={ex.to} to={ex.to} className="group">
            <div className={`bg-white rounded-xl shadow-lg p-6 border-t-4 border-${ex.color}-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 h-full flex flex-col`}>
              <div className="flex items-center mb-4">
                <div className={`bg-${ex.color}-100 p-3 rounded-lg`}>
                  <span className="text-2xl">{ex.icon}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 ml-3">
                  {ex.title}
                </h2>
              </div>
              <p className="text-gray-700 mb-3 flex-grow">
                {ex.desc}
              </p>
              <div className={`mt-4 text-${ex.color}-600 font-semibold group-hover:text-${ex.color}-700 flex items-center`}>
                Explore <span className="ml-1">→</span>
              </div>
            </div>
          </Link>
        ))}
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
            <div className="font-semibold text-gray-800 mb-2">📖 Explanations</div>
            <div className="text-sm text-gray-600">Clear descriptions of concepts</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="font-semibold text-gray-800 mb-2">💻 Code Logic</div>
            <div className="text-sm text-gray-600">Real-world implementation patterns</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
