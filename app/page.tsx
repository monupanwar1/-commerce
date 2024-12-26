import { getProducts } from "@/action/products";
import { ProductCard } from "@/components/product-card";


const dummyproducts  = [
  {
    id:1,
    title:"dress1",
    price:15000,
    description:"mzing",
    category:"hoodie",
    image:"./images/red.jpeg",
  },
  {
    id:2,
    title:"dress2",
    price:5000,
    description:"mzing",
    category:"hoodie",
    image:"./images/gray.jpeg",
  },
  {
    id:3,
    title:"dress3",
    price:2500,
    description:"mzing",
    category:"hoodie",
    image:"./images/red.jpeg",
  },
  {
    id:4,
    title:"dress4",
    price:5000,
    description:"mzing",
    category:"hoodie",
    image:"./images/black.jpeg",
  },
  {
    id:5,
    title:"dress5",
    price:22000,
    description:"mzing",
    category:"hoodie",
    image:"./images/gray.jpeg",
  },
  {
    id:6,
    title:"dress6",
    price:20000,
    description:"mzing",
    category:"hoodie",
    image:"./images/black.jpeg",
  },
  {
    id:7,
    title:"dress7",
    price:25000,
    description:"mzing",
    category:"hoodie",
    image:"./images/gray.jpeg",
  },
  {
    id:8,
    title:"dress8",
    price:25000,
    description:"mzing",
    category:"hoodie",
    image:"./images/red.jpeg",
  },
  
]

export default async function Home() {
  const products = (await getProducts()) || dummyproducts;
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummyproducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
