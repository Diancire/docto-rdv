import { ServiceProps } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ServiceCard({service}:{service:ServiceProps}) {
  return (
    <Link href={`/services/${service.slug}`} className=''>
      <div className='flex flex-col text-center item-center gap-2 p-5 bg-blue-50 m-2 rounded-lg hover:scale-105 transition-all ease-in-out'>
        <span className='text-primary text-5xl flex items-center justify-center'>{service.icon}</span>
        <h4>{service.title}</h4>
      </div>
    </Link>
  )
}

export default ServiceCard