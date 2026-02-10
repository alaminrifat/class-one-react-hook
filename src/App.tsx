import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UseEffectExample from "./pages/UseEffectExample";
import UseEffectEventExample from "./pages/UseEffectEventExample";
import UseTransitionExample from "./pages/UseTransitionExample";
import UseFormStatusExample from "./pages/UseFormStatusExample";
import UseDeferredValueExample from "./pages/UseDeferredValueExample";
import SWRExample from "./pages/SWRExample";
import ReactQueryExample from "./pages/ReactQueryExample";
import MemoExample from "./pages/MemoExample";
import UseMemoExample from "./pages/UseMemoExample";
import UseCallbackExample from "./pages/UseCallbackExample";
import Playground from "./pages/Playground";
// import TestPage from "./pages/Test";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useeffect" element={<UseEffectExample />} />
        <Route path="/useeffectevent" element={<UseEffectEventExample />} />
        <Route path="/usetransition" element={<UseTransitionExample />} />
        <Route path="/useformstatus" element={<UseFormStatusExample />} />
        <Route path="/usedeferredvalue" element={<UseDeferredValueExample />} />
        <Route path="/swr" element={<SWRExample />} />
        <Route path="/react-query" element={<ReactQueryExample />} />
        <Route path="/memo" element={<MemoExample />} />
        <Route path="/usememo" element={<UseMemoExample />} />
        <Route path="/usecallback" element={<UseCallbackExample />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </div>
  );
}

export default App;
