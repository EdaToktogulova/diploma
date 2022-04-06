import "./Header.css";
import headerImage from"../../assets/header.jpg";

function Header() {
   const style = {
      backgroundImage: `url(${headerImage})`
   };

   return (
      <header className="Header" style={style}>
         <h1>Hello world</h1>
         <p>This is an internet shop</p>
      </header>
   );
}

export default Header;