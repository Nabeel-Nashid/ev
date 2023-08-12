import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Service from "./pages/Service";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About />
      <Service />
      <Products />
      
    </div>
  );
}

export default App;
