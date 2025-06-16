
import React from 'react';
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdDisplaySettings } from "react-icons/md";
import { FaRecordVinyl } from "react-icons/fa6";


const  data = [
    {id:1,title:(<>INDUSTRY EXPERT <br/>MENTORS</>),img:< FaChalkboardTeacher className='text-white md:text-5xl  text-3xl text-center w-full' />,color:'#505050'},
    {id:2,title:(<>LIVE <br/>CLASS</>),img:<FaRecordVinyl className='text-white md:text-5xl  text-3xl text-center w-full' />,color:'#ED1C24'},
    {id:3,title:(<>QUALITYFUL <br/>TRAINING</>),img:<  MdDisplaySettings className='text-white md:text-5xl  text-3xl text-center w-full' />,color:'#505050'},
]

const WhyUs = () => {
    return (
        <div className=' flex justify-center  '>
         {
            data.map((params,idx)=>(
               
               <div key={idx} className='overflow-hidden'>
                 <div
                style={{ backgroundColor: params.color }}
                className={`lg:w-[270px] exl:w-[300px] uws:w-[500px] md:h-[200px] lg:h-[230px] uws:h-[450px] grid items-center justify-center text-center w-24 sm:w-28 md:w-52  py-4 md:py-0 lg:py-0 hover:scale-125 transition-transform duration-500`}>
            <div className=''>
                {params?.img }
            <p className=' text-[10px] md:text-[20px] lg:text-[32px] uws:text-[60px] text-white momCake    leading-1 sm:leading-1 md:leading-7 lg:leading-7 exl:leading-7 uws:leading-10  mt-2'>{params.title}</p>
            </div>
            </div>
               </div>
                
            ))
         }
        </div>
    );
};

export default WhyUs;