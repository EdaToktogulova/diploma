import ProductList from "../components/ProductsList/ProductsList";
import { getProducts } from "../data/products";

function Products() {
   return (
      <>
         <ProductList products={getProducts()} />
      </>
   );
}

// export default Products;