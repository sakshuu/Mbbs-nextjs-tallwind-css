"use client"; // Ensure this is a Client Component

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper core CSS
import 'swiper/css/pagination'; // Swiper pagination CSS
import { Pagination } from 'swiper/modules'; // Swiper pagination module
import blogs from './../assets/img/blogs.png'; // Import blog image
import profile from './../assets/img/profile.png'; // Import blog image

// Array of objects for blogs
const blogsData = [
  {
    id: 1,
    title: "5 Reasons to Study MBBS in Russia",
    description:
      "Discover why Uzbekistan is the perfect destination for aspiring doctors with affordable fees and globally recognized degrees.",
    image: blogs,
    author: "Tracey Wilson",
    date: "Dec 26, 2024",
  },
  {
    id: 2,
    title: "5 Reasons to Study MBBS in Russia",
    description:
      "Discover why Uzbekistan is the perfect destination for aspiring doctors with affordable fees and globally recognized degrees.",
    image: blogs,
    author: "Tracey Wilson",
    date: "Dec 26, 2024",
  },
  {
    id: 3,
    title: "5 Reasons to Study MBBS in Russia",
    description:
      "Discover why Uzbekistan is the perfect destination for aspiring doctors with affordable fees and globally recognized degrees.",
    image: blogs,
    author: "Tracey Wilson",
    date: "Dec 26, 2024",
  },
];

export default function Myblogs() {
  return (
    <div className="relative py-16 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-8 text-gray-800">
        Our Latest <span className='text-blue-400 underline'>Blogs</span> 
      </h2>
      <p className="text-lg text-gray-600 text-center mb-12">
        Empowering Future Doctors with Valuable Information!
      </p>

      {/* Blog Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          slidesPerView={1} // Default: 1 slide on mobile
          spaceBetween={20} // Space between slides
          pagination={{
            clickable: true, // Enable clickable pagination
          }}
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides on tablets
            },
            1024: {
              slidesPerView: 3, // 3 slides on desktops
            },
          }}
          modules={[Pagination]} // Add pagination module
          className="mySwiper"
        >
          {blogsData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                {/* Blog Image */}
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Blog Title */}
                <h3 className="text-xl font-bold mb-4 text-blue-600">{blog.title}</h3>

                {/* Blog Description */}
                <p className="text-gray-700 mb-6">{blog.description}</p>

                {/* Author and Date */}
                <div className="flex items-center space-x-4">
                  <div className="relative h-10 w-10">
                    <Image
                      src={profile} // Replace with your profile icon path
                      alt="Profile Icon"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-gray-800 font-bold">{blog.author}</p>
                    <p className="text-gray-600">{blog.date}</p>
                  </div>
                </div>
<div className='flex justify-center'>

                {/* Read More Button */}
                <button className="mt-6 bg-blue-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300">
                  Read more
                </button>
</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}