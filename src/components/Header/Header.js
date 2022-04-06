import "./Header.css";
import headerImage from "../../assets/header.jpg";

function Header() {
   const style = {
      backgroundImage: `url(${headerImage})`
   };

   return (
      <header className="Header" style={style}>
         <head>
         <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&display=swap" rel="stylesheet"/>
         </head>
         <h1>Dream in a bottle </h1>
         <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" rel="stylesheet"/>
         <p>Le parfume est la  musique du corps</p>
      </header>
   );
}

export default Header;