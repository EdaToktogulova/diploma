import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";

export default function CartLink() {
   const number = useSelector(store => {
      return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
   });

   return (
      <NavLink to="/cart"><div><GrCart size={25} style={{ marginleft: '4px' }} /></div> ({number})</NavLink>
   );
}