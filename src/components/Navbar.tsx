import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold mr-8">React Hooks</span>
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-white text-blue-600 shadow-md"
                    : "hover:bg-white/20"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/useeffect"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-white text-blue-600 shadow-md"
                    : "hover:bg-white/20"
                }`
              }
            >
              useEffect
            </NavLink>
            <NavLink
              to="/useeffectevent"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-white text-purple-600 shadow-md"
                    : "hover:bg-white/20"
                }`
              }
            >
              useEffectEvent
            </NavLink>
            <NavLink
              to="/usetransition"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-white text-green-600 shadow-md"
                    : "hover:bg-white/20"
                }`
              }
            >
              useTransition
            </NavLink>
            <NavLink
              to="/useformstatus"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-white text-orange-600 shadow-md"
                    : "hover:bg-white/20"
                }`
              }
            >
              useFormStatus
            </NavLink>
            <NavLink
              to="/usedeferredvalue"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-white text-indigo-600 shadow-md"
                    : "hover:bg-white/20"
                }`
              }
            >
              useDeferredValue
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
