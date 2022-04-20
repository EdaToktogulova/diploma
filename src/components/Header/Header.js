import "./Header.css";

function Header({ image, title, children }) {
   return (
      <header className="Header">
         <img src={image} />
         <section>
         <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"/>
         <h1>{title}</h1>
         <link href="https://fonts.googleapis.com/css2?family=Lemonada:wght@300&display=swap" rel="stylesheet"/>
         <p>{children}</p>
         </section>
      </header>
   );
}

export default Header;