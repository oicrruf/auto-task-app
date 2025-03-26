import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Ventas from "./pages/Ventas";
import Clientes from "./pages/Clientes";
import DTEPage from "./pages/DTEPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ventas" element={<Ventas />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/dte" element={<DTEPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
