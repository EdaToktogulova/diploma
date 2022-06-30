import productImage from "../assets/product.jpeg";
import product2Image from "../assets/product2.jpeg";
import product3Image from "../assets/product3.jpeg";
import product4Image from "../assets/product4.jpeg";
import product5Image from "../assets/product5.jpeg";
import product6Image from "../assets/product6.jpeg";
// import product7Image from "../assets/product7.jpeg";
// import product8Image from "../assets/product8.jpeg";

const products = [
   {
      image: productImage,
      productId: "dior-j'adore",
      categoryId: "",
      title: "Dior J'Adore",
      description: `Perfume is described in a musical metaphor as having three sets of notes, making the harmonious scent accord. The notes unfold over time, with the immediate impression of the top note leading to the deeper middle notes, and the base notes gradually appearing as the final stage. These notes are created carefully with knowledge of the evaporation process of the perfume.`,
      price: 100,
   },
   {
      image: product2Image,
      productId: "giorgio-armani",
      categoryId: "",
      title: "Gergio Armani",
      description: `Perfume is described in a musical metaphor as having three sets of notes, making the harmonious scent accord. The notes unfold over time, with the immediate impression of the top note leading to the deeper middle notes, and the base notes gradually appearing as the final stage. These notes are created carefully with knowledge of the evaporation process of the perfume.`,
      price: 120,
   },
   {
      image: product3Image,
      productId: "coco-mademoiselle",
      categoryId: "",
      title: "Coco Mademoiselle",
      description: `Perfume is described in a musical metaphor as having three sets of notes, making the harmonious scent accord. The notes unfold over time, with the immediate impression of the top note leading to the deeper middle notes, and the base notes gradually appearing as the final stage. These notes are created carefully with knowledge of the evaporation process of the perfume.`,
      price: 200,
   },
   {
      image: product4Image,
      productId: "chloe-signature",
      categoryId: "",
      title: "Chloe Signature",
      description: `Perfume is described in a musical metaphor as having three sets of notes, making the harmonious scent accord. The notes unfold over time, with the immediate impression of the top note leading to the deeper middle notes, and the base notes gradually appearing as the final stage. These notes are created carefully with knowledge of the evaporation process of the perfume.`,
      price: 130,
   },
   {
      image: product5Image,
      productId: "lancome-cristal",
      categoryId: "",
      title: "Lancome Cristal",
      description: `Perfume is described in a musical metaphor as having three sets of notes, making the harmonious scent accord. The notes unfold over time, with the immediate impression of the top note leading to the deeper middle notes, and the base notes gradually appearing as the final stage. These notes are created carefully with knowledge of the evaporation process of the perfume.`,
      price: 110,
   },
   {
      image: product6Image,
      productId: "versace-eros",
      categoryId: "",
      title: "Versace Eros",
      description: `Perfume is described in a musical metaphor as having three sets of notes, making the harmonious scent accord. The notes unfold over time, with the immediate impression of the top note leading to the deeper middle notes, and the base notes gradually appearing as the final stage. These notes are created carefully with knowledge of the evaporation process of the perfume.`,
      price: 150,
   },
   {
      image: product7Image,
      productId: "chanel-5",
      categoryId: "",
      title: "Chanel 5",
      description: `Perfume is described in a musical metaphor as having three sets of notes, making the harmonious scent accord. The notes unfold over time, with the immediate impression of the top note leading to the deeper middle notes, and the base notes gradually appearing as the final stage. These notes are created carefully with knowledge of the evaporation process of the perfume.`,
      price: 160,
   },
   {
      image: product8Image,
      productId: "christian-dior",
      categoryId: "",
      title: "Christian Dior",
      description: `Perfume is described in a musical metaphor as having three sets of notes, making the harmonious scent accord. The notes unfold over time, with the immediate impression of the top note leading to the deeper middle notes, and the base notes gradually appearing as the final stage. These notes are created carefully with knowledge of the evaporation process of the perfume.   `,
      price: 120,
   },
];

export function getProducts(categoryId) {
   if (categoryId) {
      return products.filter(product => product.categoryId === categoryId);
   }

   return products;
}

// dark-roast
export function getProduct(productId) {
   return products[
      products.findIndex(
         product => product.productId === productId
      )
   ];
}