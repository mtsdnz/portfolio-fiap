import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Projetos from "./pages/projetos";
import Contato from "./pages/contato";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''}`} >
        <div className={`min-h-screen flex flex-col bg-neutral-100 dark:bg-gray-900`}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="flex-grow flex">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projetos/:projectId" element={<Projetos />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
