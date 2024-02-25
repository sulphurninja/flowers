// pages/about.js

import React from 'react';

const AboutPage = () => {
  return (
    <div className=" py-8">
      <section className="container mx-auto flex flex-col items-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Meet the Owner - Prasad Rakshe</h2>
          <p className=" text-justify">
            Welcome to Prasad Agro, where the beauty of flowers meets the passion for cultivation. Our journey is steered by the visionary owner, Prasad Rakshe, who brings years of expertise and love for flowers to every petal we deliver.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img className="h-full lg:h-fit lg:w-full object-cover rounded-lg" src="/prasad.jpeg" alt="Owner Name" />
          </div>
          <div className="p-6">
            <p className=" mb-4">
              Prasad Rakshe is not just a business leader but a dedicated enthusiast who has cultivated a dream into reality. With a profound understanding of the floral industry, Prasad ensures that Prasad Agro delivers the freshest and most vibrant flowers to customers across India.
            </p>
            <h1 className='text-white font-bold text-center text-2xl '> Our Process</h1>
            <div className='grid-cols-3 grid mt-12 gap-4'>
               
            <img src='/flowers.jpg' className='lg:h-56 lg:w-56  w-full rounded-xl' />
            <img src='/flower.jpg' className='lg:h-56 lg:w-56  w-full rounded-xl' />

            <img src='/boxes.jpeg' className='lg:h-56 lg:w-56  w-full rounded-xl' />

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;
