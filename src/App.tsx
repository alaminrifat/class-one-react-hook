import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UseEffectExample from "./pages/UseEffectExample";
import UseEffectEventExample from "./pages/UseEffectEventExample";
import UseTransitionExample from "./pages/UseTransitionExample";
// import TestPage from "./pages/Test";
import CleanupExample from "./pages/UseEffect";
import TransitionExample from "./pages/TransitionExample";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useeffect" element={<UseEffectExample />} />
        <Route path="/useeffectevent" element={<UseEffectEventExample />} />
        <Route path="/usetransition" element={<UseTransitionExample />} />
        <Route path="/test" element={<CleanupExample />} />
        <Route path="/test2" element={<TransitionExample />} />
      </Routes>
    </div>
  );
}

export default App;
