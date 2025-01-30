"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import university from './../assets/img/university.png'

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
  // Add more universities as needed
];

export default function InstituteSeaction() {
  return (
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
  );
}