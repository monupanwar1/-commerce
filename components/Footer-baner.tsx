import Link from "next/link"

const FooterBanner = () => {
  return (
    <div className="">
    <div className="h-80 relative rounded-md bg-[#F02D20] w-full p-10 flex items-center justify-between">
      <div className="w-40">
        <p className="text-white">20% off</p>
        <h1 className="ml-2 text-8xl text-white font-bold">Fine <br />Smile</h1>
        <p className="text-white">25 dec to 5 Jan</p>
      </div>
          
      <div className="shadow-2 absolute bottom-0 left-[500px] shadow-2 shadow-black width-40">    
      <img src="./Headphone.png" 
      width="500"
      height="400"
      alt="" />
      </div>


      <div className="width-36">
        <h4 className="text-white">Beats solo ai</h4>
        <h1 className="ml-2 text-6xl text-white font-bold">Winter Sale</h1>
        <h4 className="text-white ">Best Headphone on the Market</h4>
        <button className="px-4  mt-6  py-2 bg-white rounded-md font-bold" href="#">
        Buy Now!
        </button>
      </div>

    </div>
    </div>
  )
}
export default FooterBanner