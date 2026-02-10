import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavDropdown = ({ title, links }: { title: string, links: { to: string, label: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if any child link is active to highlight the dropdown trigger
  const isActive = links.some(link => link.to === location.pathname);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1 ${
          isActive || isOpen
            ? "bg-white/20 text-white"
            : "hover:bg-white/10 text-white/90"
        }`}
      >
        {title}
        <svg 
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-md shadow-xl py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center group">
            <span className="text-xl font-bold mr-2 group-hover:text-white/90 transition-colors">React Hooks</span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full text-white/90">Class One</span>
          </NavLink>

          <div className="flex items-center space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive ? "bg-white text-blue-600 shadow-md" : "hover:bg-white/20"
                }`
              }
            >
              Home
            </NavLink>

            <NavDropdown 
                title="Effects & Async" 
                links={[
                    { to: "/useeffect", label: "useEffect" },
                    { to: "/useeffectevent", label: "useEffectEvent" },
                    { to: "/usetransition", label: "useTransition" },
                    { to: "/useformstatus", label: "useFormStatus" },
                    { to: "/usedeferredvalue", label: "useDeferredValue" },
                ]} 
            />

            <NavDropdown 
                title="Performance" 
                links={[
                    { to: "/memo", label: "React.memo" },
                    { to: "/usememo", label: "useMemo" },
                    { to: "/usecallback", label: "useCallback" },
                ]} 
            />

            <NavDropdown 
                title="Data Fetching" 
                links={[
                    { to: "/swr", label: "SWR" },
                    { to: "/react-query", label: "React Query" },
                ]} 
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
