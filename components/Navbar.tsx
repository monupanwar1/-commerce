import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

const Navabr = () => {
  return (
    <div className="flex justify-between p-6 items-center relative transparent bg-2 top-0 right-0">
      <p className="Logo text-gray-500">
        <Link href="/Cart">E-commerce</Link>
      </p>
      
      <Link href= "/app/pages/Cart.tsx"
       className="cart-icon font-4px flex  text-2xl text-gray-500">
        <AiOutlineShopping  className="z-10 "/>
        <span className="text-red bg-rose-500 rounded-full h-8 w-8 items-center justify-center absolute top-2 right-2 ">
          10
        </span>
      </Link>
    </div>
  );
};

export default Navabr;
