import Link from "next/link"



interface CardProps{
   image: string;
   name: string;
   price: string;

}

const page: React.FC<CardProps> = ({ image,name,price }) => {
  return (
    <div className="mt-14 p-10">
    <div className="h-96  w-80 border-2 bg-gray-300 rounded-md p-4 mb-60">
      <Link href='/#'>
      <div  className="h-60 bg-red-500 w-full p-10 rounded-md  ">
        <img src={image} 
        alt={name} />
      </div>
      </Link>
      <div className="mt-4 p-10 flex items-center justify-between">
      <h4>{price}</h4>
      <Link  href="/" className="px-4 py-2 bg-red-500 rounded-md">Add to Cart </Link>
      </div>
      

    </div>
    </div>
  )
}
export default page