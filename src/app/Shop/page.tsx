import { ChevronRight, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Services from "../Services/page";

export default function Products(){

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 30,
          image: "/Product 1.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Jane Smith',
          price: "Rp 2.500.000",
          age: 25,
          image: "/Product 2.jpeg",
          description: 'Stylish Cafe Chair',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Product 3.png',
          description: 'Luxury Big Sofa',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Product 4.png',
          description: 'Outdoor bar table and stool',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Product 5.png',
          description: 'Night Lamp',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Product 6.png',
          description: 'Small mug',
        },
        {
            name: 'Sam Wilson',
            price: "Rp 2.500.000",
            image: '/Product 7.png',
            description: 'Cute bed set',
            age: 0
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Product 8.png',
          description: 'Minimalist flower pot',
        },
        {
            name: 'Syltherine',
            price: "Rp 2.500.000",
            age: 30,
            image: "/Product 1.png",
            description: 'Stylish cafe chair',
          },
          {
            name: 'Jane Smith',
            price: "Rp 2.500.000",
            age: 25,
            image: "/Product 2.jpeg",
            description: 'Stylish Cafe Chair',
          },
          {
            name: 'Sam Wilson',
            price: "Rp 2.500.000",
            age: 28,
            image: '/Product 3.png',
            description: 'Luxury Big Sofa',
          },
          {
            name: 'Sam Wilson',
            price: "Rp 2.500.000",
            age: 28,
            image: '/Product 4.png',
            description: 'Outdoor bar table and stool',
          },
          {
            name: 'Sam Wilson',
            price: "Rp 2.500.000",
            age: 28,
            image: '/Product 5.png',
            description: 'Night Lamp',
          },
          {
            name: 'Sam Wilson',
            price: "Rp 2.500.000",
            age: 28,
            image: '/Product 6.png',
            description: 'Small mug',
          },
          {
              name: 'Sam Wilson',
              price: "Rp 2.500.000",
              image: '/Product 7.png',
              description: 'Cute bed set',
              age: 0
          },
          {
            name: 'Sam Wilson',
            price: "Rp 2.500.000",
            age: 28,
            image: '/Product 8.png',
            description: 'Minimalist flower pot',
          },
      ];
    
    return (
        <>
        <div className="w-full text-center">
            <Image src="/Shop Image.png" alt="Shop Image" width={1440} height={316} className="mx-auto"/>
            <h2 className="w-[124px] h[72px] absolute top-[221px] left-[680px] font-medium text-[48px]">Shop</h2>
            <div className="flex">
                <p className="absolute top-[295px] left-[680px] font-medium">Home</p>
                <ChevronRight className="absolute top-[297px] left-[730px]"/>
                <p className="absolute top-[296px] left-[760px] font-light">Shop</p>
            </div>
        </div>

        <div className="flex w-[1440px] h-[100px] absolute top-[417px] bg-[#F9F1E7] ml-10 mt-2">
            <SlidersHorizontal className="absolute top-[37px] left-[98px]"/>
            <p className="font-normal text-[20px] absolute top-[35px] left-[150px]">Filter</p>
        </div>
        <Image src="/Dots.png" alt="Dots" width={24} height={24} className="absolute top-[455px] left-[240px]"/>
        <Image src="/Vector.png" alt="Vector" width={24} height={24} className="absolute top-[455px] left-[290px]"/>
        <hr className="border-r-2 border-[#0b0a0a] w-[37px] absolutetop-[448px] left-[312px]"/>
        <p className="absolute top-[455px] left-[346px] font-normal text-base ml-8">Showing 1–16 of 32 results</p>
        <Image src="/Group 60.png" alt="Group 60" width={126} height={55} className="absolute top-[448px] left-[900px]"/>
        <Image src="/Group 61.png" alt="Group 61" width={288} height={55} className="absolute top-[448px] left-[1052px]"/>

            <div className="cardsContainer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-52 gap-8 mt-40">
                {data.map((card, index) => (
              
                <div className="card" key={index} style={{ width: "15rem" }}>
                    <img
                    src={card.image}
                    style={{ width: "18rem", height: "18rem" }}
                    className="card-img-top"
                    //   alt={card.title}
                    />

                    <div className="card-body text-left pl-2 bg-gray-100">
                        <h5 className="card-title font-semibold">
                        {card.name} 
                        </h5>
                        <p className="card-text">{card.description}</p>
                        <h5 className="card-title" style={{ fontWeight: "bold" }}>
                        {card.price}
                        </h5>
                    </div>
                </div>
))}

            </div>

            <div className="flex gap-4 relative top-10 left-[650px]">
              <p className="bg-[#F9F1E7] py-2 px-4 rounded-lg hover:bg-[#B88E2F]">1</p>
              <p className="bg-[#F9F1E7] py-2 px-4 rounded-lg hover:bg-[#B88E2F]">2</p>
              <p className="bg-[#F9F1E7] py-2 px-4 rounded-lg hover:bg-[#B88E2F]">3</p>
              <p className="bg-[#F9F1E7] py-2 px-4 rounded-lg hover:bg-[#B88E2F]">Next</p>
            </div>
            <Services />
        </>
    )
}