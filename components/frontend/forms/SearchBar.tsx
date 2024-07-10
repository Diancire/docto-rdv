import { Button } from '@/components/ui/button'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

function SearchBar() {
  return (
    
    <form className="py-6 w-[350px] px-2 md:px-0 lg:px-0">   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Recherche..." required />
            <Button type="submit" className='absolute end-2.5 bottom-2'>Recherche</Button>
        </div>
    </form>

  )
}

export default SearchBar