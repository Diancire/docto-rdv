"use client"
import React from 'react'
import { Calendar } from "@/components/ui/calendar"

function Availability() {
    const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date())
    console.log(bookDate);

    const formattedDate = bookDate ? bookDate.toLocaleDateString('fr-FR', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }) : "Aucune date sélectionnée";

    const capitalizedFormattedDate = formattedDate.replace(/\b\w/g, c => c.toUpperCase());

    const timeStamps = [
        {
          time:"8:30"
        },
        {
          time:"9:30"
        },
        {
          time:"10:30"
        },
        {
          time:"11:30"
        },
        {
          time:"12:30"
        },
        {
          time:"13:30"
        }
      ]

  return (
    <div className='mb-[150px]'>
        <h2 className='font-bold py-4 text-xl uppercase text-slate-500 tracking-wider'>Sélectionner une date et une heure</h2>
        <div className="grid grid-cols-2">
            <div className="sm:col-span-1 col-span-full">
                <Calendar
                    mode="single"
                    selected={bookDate}
                    onSelect={setBookDate}
                    className="rounded-md"
                />
            </div>
            <div className="sm:col-span-1 col-span-full">
                <div className='px-4'>
                    <h2 className="pb-4 font-semilbold text-center text-slate-700 py-3">{capitalizedFormattedDate}</h2>
                    <div className='py-3 grid grid-cols-3 gap-4'>
                    {timeStamps.slice(0,5).map((item, index) => {
                        return (
                        <button key={index} className='bg-blue-500 text-sm text-white py-2 px-3 text-center hover:bg-blue-400'>{item.time}</button>
                        )
                        })
                    }
                    <button className='bg-blue-900 hover:bg-blue-800 text-white text-sm py-2 px-3 text-center'>Plus</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Availability