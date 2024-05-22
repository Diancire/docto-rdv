import React from 'react'
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

function FixedBookButton() {
  return (
    <div className="fixed bottom-0 bg-white z-50 w-full shadow-2xl py-8 px-6 rounded-md border-gray-200">
        <div className='max-w-4xl mx-auto flex justify-between'>
            <div>
                <p className='text-xl font-bold'>56€</p>
                <p className='font-semibold'>Mardi 12 Mars 9:00</p>
            </div>
            <Button className='uppercase font-medium'>
                <Plus className='w-5 h-5 mr-1'/>
                Réserver
            </Button>
        </div>
    </div>
  )
}

export default FixedBookButton