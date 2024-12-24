import Card from "@/components/card";


interface Products {
  image:String;
  
  price:string;
}


const products = [
  {
    image: "/images/headphone.jpg", // Replace with your headphone image URL
    name: "Headphone",
    price: "$99.99",
  },
  {
    image: "/images/speaker.jpg", // Replace with your speaker image URL
    name: "Speaker",
    price: "$149.99",
  },
  {
    image: "/images/earbuds.jpg", // Replace with your earbuds image URL
    name: "Earbuds",
    price: "$49.99",
  },
];


export const Products = () => {
  return (
    <div className="text-black h-screen w-full ">
         <h1 className="text-4xl font-bold mt-10 text-center text-black">Best selling Products</h1>
         <div className="flex items-center justify-between ">
         {products.map((products,index)=>(
          <Card
          key={index}
          image={products.image}
          name={products.name}
          price={products.price}
          
          
          />

         ))}
         </div>
        

    </div>
  )
}

export default Products;