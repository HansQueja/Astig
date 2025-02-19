import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Dost from "./pages/dost/Dost";
import Programs from "./pages/programs/Programs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/dost" element={<Dost />} />
      </Routes>
    </Router>
  );
}

export default App;
