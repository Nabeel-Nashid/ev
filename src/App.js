import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Service from "./pages/Service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About />
      <Service />
      <Products />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
