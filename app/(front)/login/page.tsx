import LoginForm from '@/components/auth/LoginForm'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='bg-blue-100 min-h-screen pt-36 pb-8'>
        <div className='grid md:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className='hidden md:flex'>
                <Image
                  src="/login.webp"
                  width={1000}
                  height={1000}
                  alt=''
                />
            </div>
            <div className=''>
                <LoginForm/>
            </div>
        </div>
    </div>
  )
}

export default page