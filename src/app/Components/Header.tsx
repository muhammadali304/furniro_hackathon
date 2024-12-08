import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full h-[100px] flex">
      <div className="flex items-center w-[1286px] mx-auto">
        {/* Logo */}
        <Image 
          src="/Logo.png" 
          alt="Logo" 
          width={50} 
          height={32} 
          className="mr-6"
        />
        <h1 className="w-[130px] h-[41px] font-bold text-[30px]">Furniro</h1>

        {/* Navigation Links */}
        <div className="flex gap-[56px] pl-[20px] ml-[100px] text-lg">
          <a href="/"><h2 className="cursor-pointer font-bold">Home</h2></a>
          <a href="/Shop"><h2 className="cursor-pointer font-bold">Shop</h2></a>
          <h2 className="cursor-pointer font-bold">Blog</h2>
          <a href="/Contact"><h2 className="cursor-pointer font-bold">Contact</h2></a>
        </div>

        {/* Vector Icons */}
        <div className="flex ml-auto gap-[40px]">
          <div className="w-[28px] h-[28px]">
            <img src="/Account.png" alt="Person" />
          </div>  
          <div className="w-[28px] h-[28px]">
            <img src="/Search.png" alt="Search Bar" />
          </div>  
          <div className="w-[28px] h-[28px]">
            <img src="/Wishlist.png" alt="Wishlist" />
          </div>  
          <div className="w-[28px] h-[28px]">
            <img src="/Cart.png" alt="Cart" />
          </div>  
        </div>
      </div>
    </div>
  );
}