import Image from 'next/image';
import React from 'react';
import career from '@/public/images/home/career.png'
  
const page = () => {
    return (
        <div className="relative mx-auto">
                <div className="relative w-full h-[240px] md:h-[453px] lg:h-[453px] uws:h-[700px] -z-10 md:-mt-0 -mt-2">
              <Image
                alt="home"
                src={career}
                fill
                quality={95}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
            </div>
            <div className='absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-32 md:-mt-60 lg:-mt-72 text-white'>
               <p className="">career</p>
                </div>
                        
                               <div className=" py-8 px-4 rounded mt-16">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Available Vacancies</h1>
              <p className="text-center text-red-600 text-xl font-bold">No Vacancies Available...</p>
                        </div>

                </div>
    );
};

export default page; 