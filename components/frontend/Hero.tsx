import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import SearchBar from './forms/SearchBar'

function Hero() {
  return (
    <section className="mt-[60px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <Image
                src="/doctor.jpg"
                width={800}
                height={800}
                alt="picture doctor"
                priority
                className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="lg:py-24">
                <h1>Trouvez vos médecins et fixez vos rendez-vous en un clin d'œil avec <span className='font-logo text-primary'>Docto-Rdv </span>!</h1>

                <p className="mt-4 text-gray-600 dark:text-slate-100">
                Facilitez la prise de rendez-vous médicaux avec Docto-Rdv ! Localisez rapidement vos médecins et planifiez vos consultations en toute simplicité. Simplifiez votre accès aux soins médicaux dès maintenant !
                </p>
                <SearchBar/>
                <Button className='mt-4'>
                  Besoin d'un médecin de toute urgence
                </Button>
                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                    <div className="flex items-center">
                        <p className="text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl font-pj">800</p>
                        <p className="ml-3 text-sm text-gray-900 dark:text-white font-pj">Spécialistes<br />Actifs</p>
                    </div>
                    <div className="hidden sm:block">
                        <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                            <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                            <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                            <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                            <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                        </svg>
                    </div>
                    <div className="flex items-center">
                        <p className="text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl font-pj">2 000</p>
                        <p className="ml-3 text-sm text-gray-900 dark:text-white font-pj">Patients<br />Actifs</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero