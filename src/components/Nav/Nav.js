import Logo from "../ui/Logo/Logo";
import "./Nav.css";
import NavItem from "./Navitem/Navitem";

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
            <NavItem url="/" active>About</NavItem>
            <NavItem url="/">Products</NavItem>
            <NavItem url="/">Contacts</NavItem>
         </ul>
      </nav>
   );
}

export default Nav;