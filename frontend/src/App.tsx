import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";
import Payment from "./Payment/Payment";
import Fulfillment from "./Fulfillment/Fulfillment";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <header style={{ position: "relative", padding: "10px" }}>
        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Toggle navigation menu"
        >
          &#9776;
        </button>

        {/* Flyout Navigation Menu */}
        <nav
          style={{
            display: menuOpen ? "flex" : "none",
            flexDirection: "column",
            gap: "10px",
            background: "#f5f5f5",
            padding: "10px",
            position: "absolute",
            top: "50px",
            left: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Catalog
          </Link>
          <Link to="/orders" onClick={() => setMenuOpen(false)}>
            Orders
          </Link>
          <Link to="/payment" onClick={() => setMenuOpen(false)}>
            Payment
          </Link>
          <Link to="/fulfillment" onClick={() => setMenuOpen(false)}>
            Fulfillment
          </Link>
        </nav>
      </header>

      {/* Page Content */}
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/fulfillment" element={<Fulfillment />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
