import Image from "next/image";
import Link from "next/link";

export default function Blog () {
    return(
        <main>
            <div>
            <Image src="/Logo.png" alt="Logo" width={77} height={77} className="absolute top-[200px] left-[725px]"/>
            <h1 className="relative top-[150px] left-[720px] text-[48px] font-medium">Blog</h1>
        </div>
   
        <img src="/Shop Image.png" alt="img" className="absolute top-[280px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto" />
          <div className="px-14 py-4 flex justify-center ml-6 pb-16">
            <nav className="text-gray-600 absolute top-[320px]">
              <Link href="/" className="hover:text-gray-400 font-sans font-bold text-xl">Home</Link>
              <span className="mx-2 ">/</span>
              <Link href="/contact" className="hover:text-gray-400  font-sans font-bold text-xl">Contact</Link>
            </nav>
          </div>
        </main>
    )
}