import Header from "../components/Header/Header";
import headerImage from "../assets/contacts.jpeg";

function Contacts() {
   return (
      <>
         <Header
            title="Us contact"
            image={headerImage}>
               A multi-brand store for rare cool contemporary perfume houses. Plus mix your own bespoke perfume at our lab. Samples. Find us at Covent Garden and online.
         </Header>
         <div>Address: Kalverstraat 71, 1012 NZ Amsterdam
         </div>
         <div>
               Amsterdam 71, 1012 NZ Kalverstraat 
         </div>
         <div>+212 12 13 15 45</div>
         <div>.</div>
      </>
   );
}

export default Contacts;