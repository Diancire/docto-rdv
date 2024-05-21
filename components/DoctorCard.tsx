import { Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DoctorCard({isInPerson=false}:{isInPerson?:boolean}) {
  const timeStamps = [
    {
      time:"8:30"
    },
    {
      time:"9:30"
    },
    {
      time:"10:30"
    },
    {
      time:"11:30"
    },
    {
      time:"12:30"
    },
    {
      time:"13:30"
    }
  ]
  return (
    <div className='border border-gray-200 bg-white inline-flex flex-col py-8 px-3 rounded-md hover:border-blue-400 duration-300 transition-all w-full'>
      <Link href="/doctors/slug">
        <h3 className='uppercase font-bold text-xl tracking-widest'>Name</h3>
        {isInPerson && 
          (<p className='py-3'>Location</p>
        )}
        <div className='flex items-center gap-4 py-4'>
          <div className='relative'>
            <Image
              src="/doctor.jpg"
              width={800}
              height={800}
              alt='doctor'
              className='w-24 h-24 rounded-full object-cover'
            />
            {!isInPerson && (
              <div className='absolute bottom-0 right-2 bg-blue-200 w-10 h-10 flex items-center justify-center rounded-full text-blue-700'>
                <Video className='w-6 h-6'/>
              </div>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <p>

            </p>
            <p className="bg-green-200 py-2 px-3 uppercase">
              Disponible
            </p>
          </div>
        </div>
      </Link>
      <div className="pt-6 border-t border-gray-400">
        <p>Tarif: 25€ à 65€</p>
        <div className='py-3 grid grid-cols-3 gap-4'>
          {timeStamps.slice(0,5).map((item, index) => {
            return (
            <Link href="#" key={index} className='bg-blue-500 text-sm text-white py-2 px-3 text-center'>{item.time}</Link>
            )
            })
          }
          <Link href="/doctors/slug" className='bg-blue-900 text-white text-sm py-2 px-3 text-center'>Plus</Link>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard