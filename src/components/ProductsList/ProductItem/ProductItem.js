import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

function ProductItem({ product }) {
   return (
      <div className={classes.ProductItem}>
         <img src={product.image} alt={product.title} />
         <div className={classes.price}>${product.price}</div>
         <Link to={"/products/" + product.productId}>{product.title}</Link>
      </div>
   );
}

export default ProductItem;