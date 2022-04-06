import "./Nav.css";

function Nav() {
   return (
      <nav className="Nav">
         <head>
         <link href="https://fonts.googleapis.com/css2?family=Rubik+Bubbles&family=Rubik+Wet+Paint&display=swap" rel="stylesheet"/>
         </head>
         <div>Perfume Shop</div>
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Contacts</a></li>
         </ul>
      </nav>
   );
}

export default Nav;