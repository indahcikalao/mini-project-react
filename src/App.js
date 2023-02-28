import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Counter from "./Components/Counter";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="relative pb-20 min-h-screen">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
