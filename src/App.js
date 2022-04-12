import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Home />
      <About />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
