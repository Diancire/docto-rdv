import { Loader } from 'lucide-react';
import React from 'react'

type SubmitButtonProps = {
    title: string;
    buttonType?: "submit" | "reset" | undefined;
    isLoading:boolean;
    loadingTitle: string;
}

function SubmitButton({title, buttonType="submit", isLoading=false, loadingTitle}:SubmitButtonProps) {
  return (
    <>
        {isLoading ? (
            <button
                type={buttonType}
                disabled
                className="flex items-center w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary item-center"
            >
               <Loader className='w-4 h-4 mr-2 flex-shrink-0 animate-spin'/> {loadingTitle}
            </button>
        ):(
            <button
                type={buttonType}
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
                {title}
            </button>
        )}
    </>
  )
}

export default SubmitButton