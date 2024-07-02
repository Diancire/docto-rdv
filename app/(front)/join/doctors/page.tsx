import { CustomButton } from '@/components/CustomButton'
import CustomAccordion, { FAQItem } from '@/components/frontend/CustomAccordion';
import { BadgeCheck, Check } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  const features = [
    {
      title: "Gestion Efficace des Rendez-vous",
    },
    {
      title: "Dossiers Médicaux Électroniques Intégrés",
    },
    {
      title: "Réduction des Annulations",
    },
    {
      title: "E-prescription et Paiements en Ligne",
    }
  ];
  const whyUs = [
    {
      title: "Augmentation de la Visibilité",
      description: "En rejoignant Docto-Rdv, vos services seront accessibles à un plus grand nombre de patients potentiels. Augmentez votre visibilité en ligne et attirez plus de patients."
    },
    {
      title: "Gestion Simplifiée des Rendez-vous",
      description: "Docto-Rdv vous permet de gérer facilement vos rendez-vous en ligne. Réduisez les annulations et les oublis grâce à des rappels automatiques envoyés aux patients."
    },
    {
      title: "Sécurité et Confidentialité",
      description: "Nous garantissons la sécurité et la confidentialité de toutes les données des patients. Notre plateforme est conforme aux réglementations en vigueur pour protéger les informations sensibles."
    },
    {
      title: "Optimisation du Temps et de la Productivité",
      description: "En automatisant la gestion des rendez-vous et les tâches administratives, Docto-Rdv vous permet de consacrer plus de temps aux soins des patients et d'améliorer votre productivité globale."
    }
  ];

  const faqItems: FAQItem[] = [
    {
      qn: "Comment puis-je m'inscrire sur Docto-Rdv?",
      ans: <p>Pour vous inscrire, cliquez sur  <a href="/register?role='DOCTOR'" className='text-primary hover:underline hover:underline-offset-2'>Rejoignez-nous</a> et remplissez le formulaire d'inscription.</p>
    },
    {
      qn: "Quels sont les avantages de Docto-Rdv?",
      ans: "Docto-Rdv offre une gestion simplifiée des rendez-vous, une augmentation de la visibilité, la sécurité et confidentialité des données, et une optimisation du temps et de la productivité."
    },
    {
      qn: "Comment gérer mes rendez-vous?",
      ans: "Une fois inscrit, vous pouvez gérer vos rendez-vous via le tableau de bord en ligne où vous pouvez accepter, modifier ou annuler des rendez-vous facilement."
    },
    {
      qn: "Est-ce que les données de mes patients sont sécurisées?",
      ans: "Oui, nous garantissons la sécurité et la confidentialité de toutes les données des patients conformément aux réglementations en vigueur."
    }
];

  return (
    <div className='min-h-screen pt-20'>
        <section className='py-16 px-4'>
          <div className='max-w-7xl gap-4 mx-auto grid grid-cols-1 md:grid-cols-2'>
            <div className=''>
              <h2 className='text-3xl font-semibold md:text-5xl md:leading-normal'>Votre solution pratique pour rester connecté avec vos patients</h2>
              <p className='py-4'>Bienvenue sur Docto-Rdv, votre solution pour une connexion simplifiée avec vos patients. Grâce à notre plateforme, gérez vos rendez-vous, fournissez des soins à distance et suivez les dossiers médicaux en toute simplicité. Participez avec nous à la transformation de vos interactions avec les patients et offrez des services de santé d'exception.</p>
              <CustomButton title='Rejoinez-nous' href="/register?role='DOCTOR'"/>
              <div className='pt-6'>
                {features.map((feature, index) => (
                    <p key={index} className='flex items-center font-semibold text-base md:text-lg py-2 px-2 mt-2 bg-blue-100 w-auto'>
                      <Check className='w-5 h-5 mr-2 flex-shrink-0 text-primary'/>
                      {feature.title}
                    </p>
                ))}
              </div>
            </div>
            <Image
              src='/stethoscope-prescription.webp'
              alt=''
              width={3000}
              height={2000}
              className='w-full h-full'
            />
          </div>
        </section>
        <section className='py-16 px-4'>
          <div className='max-w-7xl gap-4 mx-auto grid grid-cols-1 md:grid-cols-2'>
            <Image
              src='/medical-consultation-with-tablet.webp'
              alt=''
              width={3000}
              height={2000}
              className='w-full h-full hidden md:block'
            />
            <div className=''>
              <h2 className='text-3xl font-semibold md:text-5xl md:leading-normal'>Traitez les patients comme vous le souhaitez.</h2>
              <div className='py-4'>
                {whyUs.map((item, index) => (
                    <div key={index} className='flex items-start py-2 px-2 mt-2 w-auto'>
                      <BadgeCheck className='w-5 h-5 mr-2 flex-shrink-0 text-primary mt-2'/>
                      <div>
                        <h3 className='text-base md:text-lg font-semibold'>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                ))}
              </div>
              <CustomButton title='Rejoinez-nous' href="/register?role='DOCTOR'"/>
            </div>
          </div>
        </section>
        <section className='py-16 px-4'>
          <div className='max-w-7xl gap-4 mx-auto'>
            <CustomAccordion faqs={faqItems}/>
          </div>
        </section>
    </div>
  )
}

export default page