

import HeroSection from "@/components/Herosection";
import Products from "@/components/Popular-products";
import FooterBanner from "@/components/Footer-baner";

type heroProps ={}

const App:React.FC<heroProps> =()=>{
  return (
   
   <div className=" w-full h-[1700px] p-10">
     <HeroSection/>
     <Products/>
     <Footer-baner/>
     
    
    
     
     
    </div>
  
  )
}
export default App;
