"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import university from './../assets/img/university.png'
import medi from './../assets/img/medi.png'

// Array of objects for university cards
const universitiesData = [

  {
    id: 1,
    name: "Andijan State Medical",
    image: university,
    fee: "Fee Structure: $5,22,111/-",
  },
  {
    id: 2,
    name: "Tashkent Medical Academy",
    image: university,
    fee: "Fee Structure: $4,50,000/-",
  },
  {
    id: 3,
    name: "Samarkand State Medical",
    image: university,
    fee: "Fee Structure: $4,80,000/-",
  },
  {
    id: 4,
    name: "Samarkand State Medical",
    image: university,
    fee: "Fee Structure: $4,80,000/-",
  },
  
];

const featuresData = [
  {
    id: 1,
    icon: "✔️",
    title: "Guaranteed Admission with Low Fees",
    description:
      "Admission to top MBBS universities in Uzbekistan with affordable fees for Indian students.",
  },
  {
    id: 2,
    icon: "✔️",
    title: "Complete Support for Documentation",
    description:
      "We provide end-to-end support for the necessary documentation required for MBBS admissions.",
  },
  {
    id: 3,
    icon: "✔️",
    title: "Affordable Fees",
    description:
      "Studying abroad becomes easy with low tuition fees and reasonable living costs.",
  },
  {
    id: 4,
    icon: "✔️",
    title: "Free Counseling & Career Guidance",
    description:
      "We offer personalized counseling and guidance to help students build a successful medical career.",
  },
];
const statisticsData = [
  {
    id: 1,
    value: "12+",
    label: "Years of expertise",
  },
  {
    id: 2,
    value: "1500+",
    label: "Satisfied academic counselled",
  },
  {
    id: 3,
    value: "10",
    label: "Live online affiliated with us",
  },
  {
    id: 4,
    value: "100+",
    label: "Visa Assistance",
  },
];

export default function InstituteSeaction() {
  return ( <>
  
    <div className="relative py-16 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">
        Explore Medical Universities in Uzbekistan
      </h2>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {universitiesData.map((university) => (
            <SwiperSlide key={university.id}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                {/* University Image */}
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={university.image}
                    alt={university.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* University Name */}
                <h3 className="text-2xl font-bold mb-2 text-blue-600">
                  {university.name}
                </h3>

                {/* Fee Structure */}
                <p className="text-gray-700">{university.fee}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

<div className="relative py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Section - Features */}
    <div>
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gray-800">
        Why Uzbekistan Medi?
      </h2>

      {/* Features List */}
      <div className="space-y-8">
        {featuresData.map((feature) => (
          <div key={feature.id} className="flex items-start">
            {/* Icon */}
            <div className="flex-shrink-0 w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center mr-4">
              {feature.icon}
            </div>

            {/* Feature Content */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Read More Button */}
      <button className="mt-8 bg-blue-400 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-500 transition duration-300">
        Read more
      </button>
    </div>

    {/* Right Section - Image */}
    <div className="relative">
      <Image
        src={medi}
        alt="Trusted Students"
        width={656}
        height={552}
        className="w-full h-auto rounded-lg"
      />
      {/* Overlay Text */}
      <div className="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-md">
        <p className="text-xl font-bold text-blue-400">10k+ Trusted Students</p>
      </div>
    </div>
  </div>
</div>
</div>



<div className="relative">
{/* Statistics Section */}
<div className="bg-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {statisticsData.map((stat) => (
        <div key={stat.id} className="text-center">
          <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
          <p className="text-lg text-gray-700 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
</>
  );
}