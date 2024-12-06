import React from 'react'

export default function page() {
    return (
        <div className='bg-gray-100 h-screen p-10 flex justify-center flex-wrap gap-8'>
            <div className='transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105'>
                <div className='flex h-full justify-center items-center'>
                    <span className='font-bold text-gray-500'>Scale</span>
                </div>
            </div> 

            <div className='transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:rotate-90 hover:rounded-xl'>
                <div className='flex h-full justify-center items-center'>
                    <span className='font-bold text-green-600'>Rotate</span>
                </div>
            </div>

            <div className='transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:translate-x-6'>
                <div className='flex h-full justify-center items-center'>
                    <span className='font-bold text-amber-500'>Translate</span>
                </div>
            </div>
        </div>
    )   
}
