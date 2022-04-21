import "./Header.css";

function Header({ image, title, children }) {
   return (
      <header className="Header">
         <input type="image" img src = {image} alt="photo" />
         <section>
         <h1>{title}</h1>
         <p>{children}</p>
         </section>
      </header>
   );
}

export default Header;