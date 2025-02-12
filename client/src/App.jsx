import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
      </Routes> 
    </Router>
  );
}

export default App
