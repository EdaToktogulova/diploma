import Header from "../components/Header/Header";
import headerImage from "../assets/home1.jpeg";

function Home() {
   return (
      <>
         <Header
            title="Welcome to our perfume shop!"
            image={headerImage}>Perfume types reflect the concentration of aromatic compounds in a solvent, which in fine fragrance is typically ethanol. Various sources differ considerably in the definitions of perfume types. 
         </Header>

         
      </>
   );
}

export default Home;