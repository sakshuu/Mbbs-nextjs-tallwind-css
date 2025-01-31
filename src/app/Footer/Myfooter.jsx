'use client';

import Image from 'next/image';
import { useState } from 'react';

const services = ['Home', 'Universities', 'MBBS in Uzbekistan'];
const company = ['About Us', 'Blogs', 'Gallery'];
const contactInfo = [
  { type: 'phone', value: '343455645' },
  { type: 'email', value: 'mangcoding123@gmail.com' },
  { type: 'address', value: '2972 Westheimer Rd. Santa Ana, Illinois 85486' },
];
const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad'
  ];

export default function Myfooter() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', city: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (<>



<div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Get Personalized Guidance for Your MBBS Journey</h1>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded-lg" />
              <div className="flex">
                <select className="p-2 border border-gray-300 rounded-lg mr-2">
                  <option>+91</option>
                </select>
                <input type="tel" placeholder="Your Mobile No." className="w-full p-2 border border-gray-300 rounded-lg" />
              </div>
              <input type="text" placeholder="Current City" className="w-full p-2 border border-gray-300 rounded-lg" />
              <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">Apply Now</button>
            </form>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/path-to-your-image.png" alt="MBBS Journey" width={400} height={400} className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>

      {/* Footer Section */}
      <footer className="bg-[#0077B6] text-white py-10">
        <div className="container mx-auto grid md:grid-cols-4 gap-6 px-4">
          <div className='space-y-4'>
            <h2 className="text-lg font-bold">Uzbekistan Medi</h2>
            <p className="mt-2 text-sm">
              Uzbekistan Medi is your trusted guide to pursuing MBBS in
              Uzbekistan. We connect aspiring doctors with top universities,
              offering affordable education and globally recognized degrees.
              Start your medical journey with us today!
            </p>
          </div>
       
          <div className='space-y-3'>
            <h2 className="text-lg font-bold">Services</h2>
            <p className="text-sm mt-1">Home</p>
            <p className="text-sm mt-1">Universities</p>
            <p className="text-sm mt-1">MBBS In Uzbekistan</p>
          </div>
          <div className='space-y-3'>
            <h2 className="text-lg font-bold">Company</h2>
            <p className="text-sm mt-1">About us</p>
            <p className="text-sm mt-1">Blogs</p>
            <p className="text-sm mt-1">Gallery</p>
          </div>
          <div className='space-y-3'>
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p className="text-sm mt-1">📞 343455645</p>
            <p className="text-sm mt-1">✉️ mangcoding123@gmail.com</p>
            <p className="text-sm mt-1">📍 2972 Westheimer Rd, Santa Ana, Illinois 85486</p>
          </div>
        </div>
        <p className="text-center text-sm mt-10">
          Uzbekistan Medi © 2025 All rights reserved.
        </p>
      </footer>
    {/* </div> */}
  </>
  );
}