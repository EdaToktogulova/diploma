import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Nav from "./components/Nav/Nav";

import About from "./pages/About";
import Categories from "./pages/Categories";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Products from "./pages/Products";


function App() {
  return ( 
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;