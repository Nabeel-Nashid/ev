import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Service from "./pages/Service";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About />
      <Service />
      <Products />
      <Contact/>
    </div>
  );
}

export default App;
