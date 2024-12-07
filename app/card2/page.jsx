import React from 'react'

export default function page() {
    return (
        <div className='bg-white h-screen p-10'>
            <div className='max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
                <div className='md:flex'>
                    <div className='md:shrink-0'>
                        <img className='h-48 w-full object-cover md:h-full md:w-48' src="https://loremflickr.com/g/320/240/team"/>
                    </div>
                    <div className='p-8'>
                        <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>Company retreats</div>
                        <a className='block mt-1 text-lg leading-tight font-medium text-black'>accommodation for your team</a>
                    </div>
                    <p className='mt-2 text-slate-500'>
                        Looking to take your team away on a retreat to enjoy awesome food and take in
                        some sunshine? We have a list of places to do just that.
                    </p>
                </div>
            </div>
        </div>
    )
}
