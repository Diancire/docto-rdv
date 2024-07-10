import React from 'react'
import SectionHeading from './SectionHeading'
import ToggleButton from './frontend/forms/ToggleButton'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import DoctorCard from './DoctorCard'
import { Map } from 'lucide-react'
import DoctorsListCarousel from './DoctorsListCarousel'

function DoctorList({
  title="Téléconsultation généraliste", 
  isInPerson, 
  className="bg-blue-50 dark:bg-primary px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16",
}:{
  title:string;
  isInPerson?:boolean;
  className?:string
  }) {
    const doctors = [
      {
        name:"John"
      },
      {
        name:"John"
      },
      {
        name:"John"
      },
      {
        name:"John"
      },
    ]
  return (
    <div className={className}>
      <div className='max-w-6xl mx-auto'>
        <SectionHeading title={title}/>
        <div className="py-4 flex items-center justify-between">
          {isInPerson?(
            <Link href="#" className='flex items-center text-primary font-semibold'>
              <Map className='mr-2 flex-shrink-0 w-4 h-4 text-primary'/>
              <span>Vue de la carte</span>
            </Link>
          ):(
            <ToggleButton/>
          )}
          <Link href="#">
            <Button variant="outline">Voir tout</Button>
          </Link>
        </div>
        <div className='py-6'>
          <DoctorsListCarousel doctors={doctors} isInPerson={isInPerson}/>
        </div>
      </div>
    </div>
  )
}

export default DoctorList