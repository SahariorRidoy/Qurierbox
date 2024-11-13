import React from 'react';
import awards1 from '../assets/awardsOneTrophy.png'
import awards2 from '../assets/awardsTwoBook.png'
import awards3 from '../assets/awardsThreeMan.png'
import awards4 from '../assets/awardsFourCar.png'
import awards5 from '../assets/awardsFiveBag.png'
const Awards = () => {
    return (
        <div className="bg-[#FFF1DC]">
        <div className="max-w-[1320px] mx-auto flex flex-col gap-12 lg:gap-4 lg:flex-row items-center justify-between">
        {/* Awards items */}
         <div className='flex items-center flex-col justify-center'>
            <div className='flex justify-center'>
            <img src={awards1} alt="" />
            </div>
            <h2 className='text-primary text-4xl font-extrabold mt-4 mb-1'>26+</h2>
            <h3 className='text-[#464558] text-xl'>Awards won</h3>
         </div>
         <div className='flex items-center flex-col justify-center'>
            <div className='flex justify-center'>
            <img src={awards2} alt="" />
            </div>
            <h2 className='text-primary text-4xl font-extrabold mt-4 mb-1'>65+</h2>
            <h3 className='text-[#464558] text-xl'>States covered</h3>
         </div>
         <div className='flex items-center flex-col justify-center'>
            <div className='flex justify-center'>
            <img src={awards3} alt="" />
            </div>
            <h2 className='text-primary text-4xl font-extrabold mt-4 mb-1'>689K+</h2>
            <h3 className='text-[#464558] text-xl'>Happy clients</h3>
         </div>
         <div className='flex items-center flex-col justify-center'>
            <div className='flex justify-center'>
            <img src={awards4} alt="" />
            </div>
            <h2 className='text-primary text-4xl font-extrabold mt-4 mb-1'>130M+</h2>
            <h3 className='text-[#464558] text-xl'>Goods delivered</h3>
         </div>
         <div className='flex items-center flex-col justify-center'>
            <div className='flex justify-center'>
            <img src={awards5} alt="" />
            </div>
            <h2 className='text-primary text-4xl font-extrabold mt-4 mb-1'>130M+</h2>
            <h3 className='text-[#464558] text-xl'>Business hours</h3>
         </div>
        </div>
      </div>
    );
};

export default Awards;