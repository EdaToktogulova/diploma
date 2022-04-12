import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Contacts from "./pages/Contacts";
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
      <Contacts/>
      <Categories/>
      <Footer />
    </div>
  );
}

export default App;
