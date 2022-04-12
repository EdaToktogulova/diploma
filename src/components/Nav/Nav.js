import Logo from "../ui/Logo/Logo";
import "./Nav.css";
import NavItem from "./NavItem/NavItem";

function Nav() {
   return (
      <nav className="Nav">
         <head>
         <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" rel="stylesheet"/>
         </head>
         <Logo/>
         <ul>
            <NavItem url="/">Home</NavItem>
            <NavItem url="/">Categories</NavItem>
            <NavItem url="/" >About</NavItem>
            <NavItem url="/">Products</NavItem>
            <NavItem url="/"active>Contacts</NavItem>
         </ul>
      </nav>
   );
}

export default Nav;