import Link from 'next/link'
import React from 'react'

function LinkCards({className}:{className?:string}) {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
      <Link href="" className={`rounded-md py-3 px-6 flex gap-4 bg-blue-50 dark:bg-primary text-primary dark:text-white hover:scale-105 ${className}`}>
        <h3>Anxiété</h3>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link href="" className={`rounded-md py-3 px-6 flex gap-4 bg-blue-50 dark:bg-primary text-primary dark:text-white hover:scale-105 ${className}`}>
        <h3>Dépression</h3>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link href="" className={`rounded-md py-3 px-6 flex gap-4 bg-blue-50 dark:bg-primary text-primary dark:text-white hover:scale-105 ${className}`}>
        <h3>Asthme</h3>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link href="" className={`rounded-md py-3 px-6 flex gap-4 bg-blue-50 dark:bg-primary text-primary dark:text-white hover:scale-105 ${className}`}>
        <h3>Migraine</h3>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link href="" className={`rounded-md py-3 px-6 flex gap-4 bg-blue-50 dark:bg-primary text-primary dark:text-white hover:scale-105 ${className}`}>
        <h3>Douleur dentaire</h3>
        <span aria-hidden="true">&rarr;</span>
      </Link>
      <Link href="" className={`rounded-md py-3 px-6 flex gap-4 bg-blue-50 dark:bg-primary text-primary dark:text-white hover:scale-105 ${className}`}>
        <h3>Mal de gorge</h3>
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  )
}

export default LinkCards