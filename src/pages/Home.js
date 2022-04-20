import Header from "../components/Header/Header";
import headerImage from "../assets/home.jpeg";

function Home() {
   return (
      <>
         <Header
            title="Welcome to our perfume shop" 
            image={headerImage}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fugiat laudantium iste quia sit deserunt soluta fugit quidem unde quisquam error necessitatibus nulla neque nemo? Eveniet dignissimos eaque fuga doloremque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fugiat laudantium iste quia sit deserunt soluta fugit quidem unde quisquam error necessitatibus nulla neque nemo? Eveniet dignissimos eaque fuga doloremque!
         </Header>
      </>
   );
}

export default Home;