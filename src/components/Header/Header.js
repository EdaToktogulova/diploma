import "./Header.css";

function Header({ image, title, children }) {
   return (
      <header className="Header">
         
         <div><img src={image}/></div>
         <section>
         <h1>{title}</h1>
         <p>{children}</p>
         </section>
      </header>
   );
}

export default Header;