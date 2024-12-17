import { BadgeCheck, Headset, Trophy, HandPlatter } from "lucide-react";

export default function Services () {
    return(
        <>
            <div className="flex bg-[#F9F1E7] w-full h-[150px] relative top-[100px] justify-around items-center">
                <div className="ml-3">
                    <h2 className="font-bold text-xl">High Quality</h2>
                    <p>Crafted from Top Materials</p>
                </div>
                <div>
                    <h2 className="font-bold text-xl">High Quality</h2>
                    <p>Crafted from Top Materials</p>
                </div>
                <div>
                    <h2 className="font-bold text-xl">High Quality</h2>
                    <p>Crafted from Top Materials</p>
                </div>
                <div>
                    <h2 className="font-bold text-xl">High Quality</h2>
                    <p>Crafted from Top Materials</p>
                </div>
            </div>
            <div className="flex">
                <Trophy className="relative left-[50px]" width={50} height={50}/>
                <HandPlatter className="relative left-[380px]" width={50} height={50}/>
                <BadgeCheck className="relative left-[700px]" width={50} height={50}/>
                <Headset className="relative left-[1030px]" width={50} height={50}/>
            </div>
        </>
    )
}