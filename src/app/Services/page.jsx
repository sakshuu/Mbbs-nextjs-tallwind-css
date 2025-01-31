"use client";

import Image from 'next/image';
import services_bg_fill from './../assets/img/services_bg_fill.png'


// Array of objects for partner universities
const universitiesData = [
  {
    id: 1,
    name: "MGBS",
    image: "/assets/university-1.jpg",
  },
  {
    id: 2,
    name: "MGBS",
    image: "/assets/university-2.jpg",
  },
  {
    id: 3,
    name: "MGBS",
    image: "/assets/university-3.jpg",
  },
];

// Array of objects for student testimonials
const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    image: "/assets/profile-1.jpg",
    comment:
      "Augue nulla monies, eget conge dolor magna vitae portitor. Mollis aliquam fristique portitor blandit nbin du fristique quam.",
  },
  {
    id: 2,
    name: "Smitha Doe",
    image: "/assets/profile-2.jpg",
    comment:
      "Augue nulla monies, eget conge dolor magna vitae portitor. Mollis aliquam fristique portitor blandit nbin du fristique quam.",
  },
  {
    id: 3,
    name: "Jaguine Doe",
    image: "/assets/profile-3.jpg",
    comment:
      "Augue nulla monies, eget conge dolor magna vitae portitor. Mollis aliquam fristique portitor blandit nbin du fristique quam.",
  },
];

// Array of objects for statistics
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

// Array of objects for services
const servicesData = [
  {
    id: 1,
    title: "Admission",
    description: "Get the guarantee/destruction to commercial customers.",
  },
  {
    id: 2,
    title: "Airport Pickup",
    description: "Get publicised and signed by our cloud provider.",
  },
  {
    id: 3,
    title: "Visa Process",
    description: "Fill prices applications followed by networked customers.",
  },
  {
    id: 4,
    title: "Documentation",
    description: "Verification of legalized documents.",
  },
  {
    id: 5,
    title: "Accommodation",
    description: "Stay in the documents with a safe environment.",
  },
  {
    id: 6,
    title: "Free Counseling",
    description: "Get free counseled by our trusted experts.",
  },
];

export default function Services() {
  return ( <>
  
    <div className="relative">

      {/* Services Section */}
      <div className="relative py-16 bg-blue-200">
       

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800">
            Our Valuable Services
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200`}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>



<div className="relative py-16 bg-gray-50">
      {/* Our Partners Universities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800">
          Our Partners Universities
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          We are affiliated with these medical universities
        </p>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {universitiesData.map((university) => (
            <div
              key={university.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-center"
            >
              {/* University Image */}
              <div className="relative h-40 w-full mb-4">
                <Image
                  src={university.image}
                  alt={university.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* University Name */}
              <h3 className="text-xl font-bold text-blue-600">{university.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Our Happy Students Section */}
      <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800">
          Our Happy Students
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          What Our Students Have to Say
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/quote-icon.png"
                  alt="Quote Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>

              {/* Student Comment */}
              <p className="text-gray-700 text-center mb-6">{testimonial.comment}</p>

              {/* Student Profile */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative h-12 w-12">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-600">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}