"use client";

import gallary from './../assets/img/gallary.png'; 
import Image from 'next/image';

// data.js
export const galleryImages = [
    { id: 1, src: gallary, alt: "Image 1" },
    { id: 2, src: gallary, alt: "Image 2" },
    { id: 3, src: gallary, alt: "Image 3" },
  ];
  
  export const faqs = [
    {
      id: 1,
      question: "Is an MBBS degree from Georgia recognized globally?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      question: "Is an MBBS degree from Georgia recognized globally?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      question: "Is an MBBS degree from Georgia recognized globally?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      question: "Is an MBBS degree from Georgia recognized globally?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

export default function PhotoGallery() {
    return ( <>

    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">Recent Photo Gallery</h1>
        <p className="text-xl mb-8">Celebrating Achievements, One Click at a Time!</p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {galleryImages.map((image) => (
            <div key={image.id} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="h-48 w-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          View More
        </button>

        {/* FAQs Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>



</>
  );
}
