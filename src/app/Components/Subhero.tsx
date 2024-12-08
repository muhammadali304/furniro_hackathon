import Image from "next/image";

export default function SubHero(){

    return (
        <div className="ml-40">
        <div className="subText w-[559px] h-[76.71px] relative top-[80px] left-[250px]">
            <h3 className="w-[300px] h-12 relative left-[200px] font-bold text-[32px]"> Browse The Range</h3>
            <p className="w-[559px] h-[28.71px] relative left-[70px] font-normal text-[20px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imgArea">

            <div className="flex  gap-6 relative top-32">
                <div className="imgOne">
                    <Image src="/Dining.png" width={381} height={480} alt="Picture of the author" />
                    <h6 className="text-center font-semibold text-[24px] mt-2">Dining</h6>
                </div>
                    

                <div className="imgTow">
                    <Image src="/Living.png" width={381} height={480} alt="Picture of the author" />
                    <h6 className="text-center font-semibold text-[24px] mt-2">Living</h6>
                </div>
                
                <div className="imgThree">
                    <Image src="/Bedroom.png" width={381} height={480} alt="Picture of the author" />
                    <h6 className="text-center font-semibold text-[24px] mt-2">Bedroom</h6>    
                </div>
            </div>
        </div>

        </div>
    )
}