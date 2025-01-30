import React from 'react'
import Image from 'next/image';
import bg_img_one from './../assets/img/bg_img_one.png'
import bg_img_two from './../assets/img/bg_img_two.png'
import bg_docter from './../assets/img/bg_docter.png'
import doctor_img from './../assets/img/doctor_img.png'
import header_tag from './../assets/img/header_tag.png'
import Whatsapp from './../assets/img/Whatsapp.png'
import titik_titik from './../assets/img/Titik_titik.png'

const cardsData = [
  {
    id: 1,
    title: "Education",
    description:
      "Get the best of quality education in Uzbekistan with the most skilled professionals.",
  },
  {
    id: 2,
    title: "Admission",
    description:
      "Direct Admissions. Students will get direct admission to the medical University of Uzbekistan.",
  },
  {
    id: 3,
    title: "Living & Accommodation",
    description:
      "Living & Accommodation is quite better, and the cost of living in Uzbekistan is low.",
  },
];

const NavHome = () => {
  return ( <>
<div className="relative h-[36rem] overflow-hidden">
      {/* Blue Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg_img_one}
          alt="Blue Background"
          fill
          className="object-cover"
        />
      </div>

      {/* School Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src={bg_img_two}
          alt="School Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        {/* Left Section - Text Content */}
        <div className="text-white flex-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        <div className="absolute left-0 top-20 h-96 w-1 bg-cyan-400"></div>
            Pursue MBBS In <br />
            <span className="text-black">Uzbekistan Top Universities</span>
          </h1>
          <p className="text-lg mb-8">
            Low-cost medical education starting from <span className="font-bold">INR 5 Lakh*</span>
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <span className="mr-2">✔️</span> No Donation & Capitation fees
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔️</span> Practice in India & across the world
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔️</span> Worldwide accepted degree
            </li>
          </ul>
          <button className="bg-blue-400 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-500 transition duration-300">
            Apply Now
          </button>
        </div>

        {/* Right Section - Doctor Image and Green Background */}
        <div className="relative flex-1 h-full flex items-end">
          {/* Green Doctor Background */}
          <div className="relative h-[31rem] w-full">
            <Image
              src={bg_docter}
              alt="Green Doctor Background"
              fill
              className="object-contain"
            />
            {/* Doctor Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={doctor_img}
                alt="Doctor"
                width={300}
                height={300}
                className="w-3/4 h-auto"
              />
            </div>
          </div>

          {/* Happy Students Tag */}
          <div className="absolute top-44 right-50">
            <Image
              src={header_tag}
              alt="Happy Students"
              width={160}
              height={80}
              className="w-40 h-20"
            />
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="absolute bottom-0 right-8 z-30">
          <Image
            src={Whatsapp}
            alt="WhatsApp"
            width={60}
            height={60}
            className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
          />
      </div>
    </div>





    <div className="relative py-16 bg-gray-50 ">
      {/* Blue Tick-Tick Line Image */}
      <div className="absolute top-0 left-0 right-0 z-0 mt-10">
        <Image
          src={titik_titik}
          alt="Blue Tick-Tick Line"
          width={1400}
          height={10}
          className="w-80 h-80"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">
          Why Study MBBS in Uzbekistan?
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{card.title}</h3>
              <p className="text-gray-700 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  )
}

export default NavHome