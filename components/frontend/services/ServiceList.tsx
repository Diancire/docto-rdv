import React from 'react'
import ServiceCard from './ServiceCard'
import { ServiceProps } from '@/types/types'

function ServiceList({ data }: {data: ServiceProps[]}) {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
        {data.map((service, index) => {
            return<ServiceCard key={index} service={service}/>
        })}
    </div>
  )
}

export default ServiceList