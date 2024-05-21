import React from 'react'
import Image from 'next/image'
import DoctorDetails from '@/components/DoctorDetails'

function page() {
  return (
    <div className='bg-slate-50 min-h-screen pt-20'>
        <div className="bg-white max-w-4xl border-gray-200 mx-auto shadow-md rounded-md">
            <div className='py-8 px-8'>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <div className='flex flex-col'>
                            <h2 className='uppercase font-bold text-xl tracking-widest'>Name</h2>
                            <p className='text-gray-500 text-xs uppercase'>Médecin généraliste</p>
                        </div>
                        <div className='py-3'>
                            <p>Consultation en présentiel</p>
                            <p>Location</p>
                        </div>
                    </div>
                    <Image
                        src="/doctor.jpg"
                        width={800}
                        height={800}
                        alt='doctor'
                        className='w-36 h-36 rounded-full object-cover'
                    />
                </div>
            </div>
            <div className=''>

                <DoctorDetails/>
            </div>
         </div> 
    </div>
  )
}

export default page