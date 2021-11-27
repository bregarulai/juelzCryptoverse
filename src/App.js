import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./App.css";
import { Navbar } from "./components";
import { Cryptocurrencies, CryptoDetails, Exchanges, HomePage, News } from "./pages";

function App() {
  return <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
       <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout> 
      <div className="footer">

      </div>
    </div>
  </div>;
}

export default App;
