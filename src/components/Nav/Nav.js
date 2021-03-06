import { useSelector } from "react-redux";
import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.css";

function Nav() {
   const isAuthenticated = useSelector(store => store.auth.idToken !== null);

   return (
      <ul className={classes.Nav}>
         <NavItem url="/">Home</NavItem>
         <NavItem url="/products">Menu</NavItem>
         <NavItem url="/contacts">Contact</NavItem>
         {isAuthenticated ? <NavItem url="/signout">Sign out</NavItem> : null}
         {!isAuthenticated ? <NavItem url="/auth">Sign in</NavItem> : null}
      </ul>
   );
}

export default Nav;