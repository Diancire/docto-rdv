import Link from 'next/link'
import React from 'react'

function LinkCards({className}:{className?:string}) {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
      <Link href="" className={`rounded-md py-3 px-6 flex gap-4 bg-blue-50 text-primary hover:scale-105 ${className}`}>
        <h2>Anxiété</h2>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link href="" className={`rounded-md py-3 px-6 flex gap-4 bg-blue-50 text-primary hover:scale-105 ${className}`}>
        <h2>Dépression</h2>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link href="" className={`rounded-md py-3 px-6 flex gap-4 bg-blue-50 text-primary hover:scale-105 ${className}`}>
        <h2>Asthme</h2>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link href="" className={`rounded-md py-3 px-6 flex gap-4 bg-blue-50 text-primary hover:scale-105 ${className}`}>
        <h2>Migraine</h2>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link href="" className={`rounded-md py-3 px-6 flex gap-4 bg-blue-50 text-primary hover:scale-105 ${className}`}>
        <h2>Douleur dentaire</h2>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link href="" className={`rounded-md py-3 px-6 flex gap-4 bg-blue-50 text-primary hover:scale-105 ${className}`}>
        <h2>Mal de gorge</h2>
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  )
}

export default LinkCards