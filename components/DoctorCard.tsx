import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DoctorCard() {
  return (
    <Link href="#" className='border border-gray-200 bg-white inline-flex flex-col py-8 px-3 rounded-md'>
      <h3 className='uppercase font-bold text-xl tracking-widest'>Name</h3>
      <p className='py-3'>Location</p>
      <div className='flex items-center gap-4 py-4'>
        <Image
          src="/doctor.jpg"
          width={800}
          height={800}
          alt='doctor'
          className='w-24 h-24 rounded-full object-cover'
        />
        <div className='flex flex-col gap-2'>
          <p>

          </p>
          <p className="bg-green-200 py-2 px-3 uppercase">
            Disponible
          </p>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-400">
        <h4></h4>
      </div>
    </Link>
  )
}

export default DoctorCard