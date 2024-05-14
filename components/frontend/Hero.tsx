import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import SearchBar from './forms/SearchBar'

function Hero() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
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
                <h2 className="text-3xl font-bold sm:text-4xl">Trouvez vos médecins et fixez vos rendez-vous en un clin d'œil avec <span className='font-logo text-primary text-4xl'>Docto-Rdv </span>!</h2>

                <p className="mt-4 text-gray-600">
                Facilitez la prise de rendez-vous médicaux avec Docto-Rdv ! Localisez rapidement vos médecins et planifiez vos consultations en toute simplicité. Simplifiez votre accès aux soins médicaux dès maintenant !
                </p>
                <SearchBar/>
                <Button className='mt-4'>Explorez maintenant</Button>
            </div>
        </div>
    </section>
  )
}

export default Hero