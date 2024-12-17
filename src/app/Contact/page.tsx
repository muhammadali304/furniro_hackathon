import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import Services from "../Services/page";



export default function Contact(){
    return(
        <main>

        <div className="relative bg-cover bg-center pt-48 pr-14" style={{ backgroundImage: "url('/Rectangle 1.png')" }}>
        <div>
            <Image src="/Logo.png" alt="Logo" width={77} height={77} className="absolute top-[120px] left-[725px]"/>
            <h1 className="relative top-[0px] left-[680px] text-[48px] font-medium">Contact</h1>
        </div>
   
        <img src="/Shop Image.png" alt="img" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto" />
          <div className="px-14 py-4 flex justify-center ml-16 pb-16">
            <nav className="text-gray-600 ">
              <Link href="/" className="hover:text-gray-400 font-sans font-bold text-xl">Home</Link>
              <span className="mx-2 ">/</span>
              <Link href="/contact" className="hover:text-gray-400  font-sans font-bold text-xl">Contact</Link>
            </nav>
          </div>
          </div>

    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Get In Touch With Us</h2>
      <p className="text-center text-gray-600 mb-8">
        For More Information About Our Products & Services, Feel Free To Drop Us An <br /> Email. Our Staff Is Always There To Help You Out. Do Not Hesitate!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p>230 St. 5th Avenue, New York, NY 10001, United States</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p>+1 (640) 452-5739</p>
            <p>+1 (754) 456-7898</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Working Time</h3>
            <p>Monday–Friday: 9:00 AM–5:00 PM</p>
            <p>Saturday–Sunday: 10:00 AM–2:00 PM</p>
          </div>
        </div>

        <MapPin className="absolute left-[230px]"/>
        <Phone className="absolute left-[230px] top-[738px]"/>
        <Clock3 className="absolute left-[230px] top-[840px]" />

        {/* Form Section */}
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="example@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="This is my subject"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Services />


</main>
    )
}