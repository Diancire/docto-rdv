"use client";

import React from 'react'

function Footer() {
    const footerNavs = [
        {
            label: "Docto-Rdv",
            items: [
                {
                    href: '/join/doctors',
                    name: 'Rejoignez-nous'
                },
                {
                    href: 'javascript:void()',
                    name: 'Contact'
                }
            ],
        },
        {
            label: "À propos",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Conditions générales d\'utilisation'
                },
                {
                    href: 'javascript:void()',
                    name: 'Politique de confidentialité'
                },
                {
                    href: 'javascript:void()',
                    name: 'Mentions légales'
                },
                {
                    href: 'javascript:void()',
                    name: 'À propos de nous'
                },
            ]
        }
    ]

    return (
        <footer className="text-gray-500 bg-white dark:bg-slate-950 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <a href="/" className="-m-1.5 p-1.5 font-logo text-primary text-3xl font-bold">
                            <span className="sr-only">Docto-Rdv</span>
                            Docto-Rdv
                        </a>
                        <p className="leading-relaxed mt-2 text-[15px] dark:text-slate-100">
                            Plateforme de prise de rendez-vous médical en ligne, facilitant la connexion entre patients et professionnels de santé.
                        </p>
                    </div>
                </div>
                <div className="flex-1 mt-10 space-y-6 justify-end sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4 md:pl-14"
                                key={idx}
                            >
                                <h4 className="text-gray-800 font-medium dark:text-slate-100">
                                    { item.label }
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a 
                                                href={el.href}
                                                className="hover:underline dark:text-gray-400 hover:text-primary dark:hover:text-gray-100"
                                            
                                            >
                                                { el.name }
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; {new Date().getFullYear()} Docto-Rdv Tous droits réservés.
                </div>
            </div>
        </footer>
    )
}

export default Footer
