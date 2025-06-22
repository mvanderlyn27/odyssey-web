import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Eula from "./pages/Eula";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";

export default function App() {
  useEffect(() => {
    document.body.classList.remove("loading");
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eula" element={<Eula />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}
