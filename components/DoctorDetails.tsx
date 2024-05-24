"use client";
import React, { useState } from 'react'
import Availability from './Availability';

function DoctorDetails() {
    const [isActive, setIsActive] = useState('availability')
  return (
    <div className=''>
        <div className='flex justify-between items-center tracking-widest bg-primary'>
            <button 
                onClick={()=>setIsActive("details")} className={isActive==="details"? "py-4 px-8 w-full text-white uppercase border-b-4":"py-4 px-8 w-full text-gray-300 uppercase"}
            >
                Détails des services
            </button>
            <button 
                onClick={()=>setIsActive("availability")} className={isActive==="availability"?"py-4 px-8 w-full text-white uppercase border-b-4":"py-4 px-8 w-full text-gray-300 uppercase"}
            >
                Disponibilité
            </button>
        </div>
        <div className='py-8 px-6'>
            {isActive==="availability"?(
            <div>
                <Availability/>
            </div>
            ):(
            <div>
                Détails des services components
            </div>
            )}
        </div>
    </div>
  )
}

export default DoctorDetails