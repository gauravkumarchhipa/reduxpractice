import About from "./components/About";
import Dynamic from "./components/Dynamic";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PracticeContext } from "./context/PracticeContext";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <PracticeContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/about/:id" element={<Dynamic />} />
        </Routes>
      </PracticeContext>
    </Router>
  );
}

export default App;
