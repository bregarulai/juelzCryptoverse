import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./App.css";
import { Navbar } from "./components";

function App() {
  return <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">

      <div className="footer">

      </div>
    </div>
  </div>;
}

export default App;
