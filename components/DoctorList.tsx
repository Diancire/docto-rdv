import React from 'react'
import SectionHeading from './SectionHeading'
import ToggleButton from './frontend/forms/ToggleButton'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import DoctorCard from './DoctorCard'

function DoctorList() {
  return (
    <div className='bg-blue-50 py-8 lg:py-24'>
      <div className='max-w-6xl mx-auto'>
        <SectionHeading title='Téléconsultation Généraliste'/>
        <div className="py-4 flex items-center justify-between">
          <ToggleButton/>
          <Link href="#">
            <Button variant="outline">Voir tout</Button>
          </Link>
        </div>
        <div className='py-6'>
          <DoctorCard/>
        </div>
      </div>
    </div>
  )
}

export default DoctorList