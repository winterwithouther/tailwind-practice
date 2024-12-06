import React from 'react'

export default function page() {
    return (
        <div className='bg-gray-100 h-dvh text-black'>
            {/* Header */}
            <div className='flex justify-between text-sm text-gray-700'>
                <div className='flex items-center'>
                    <a className='block p-3'>About</a>
                    <a className='block p-3'>Store</a>
                </div>
                <div className='flex items-center'>
                    <a className='block p-3'>Gmail</a>
                    <a className='block p-3'>Images</a>
                    <img className='rounded-full block py-3 px-4' src="https://lh3.googleusercontent.com/-qKDxtPVf3MA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdxXjFhEvxN4q1JUHeo4xlUIanULA.CMID/s64-c/photo.jpg"/>
                </div>
            </div>

            {/* Main */}
            <div className='flex justify-center pt-20'>
                <div>
                    <img className='w-2/3 ml-auto ' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
                    <div className='flex border border-gray-200 rounded-full p-4 shadow text-xl'>
                        <div>🕵</div>
                        <input type="text" className='w-full outline-none px-3 bg-gray-100'/>
                        <div>🎤</div>
                    </div>
                    <div className='mt-8 text-center'>
                        <button className='mr-3 bg-gray-200 border border-gray-200 py-3 px-4 rounded hover:bg-gray-400 hover:border-gray-500'>Google Search</button>
                        <button className='bg-gray-200 border border-gray-300 py-3 px-4 rounded hover:bg-gray-400 hover:border-gray-500'>I'm Feeling Lucky</button>
                    </div>
                </div>
            </div>

            <div className='fixed bottom-0 bg-gray-200 border-t w-full flex justify-between text-gray-600 text-xs'>
                <div className='flex'>
                    <a className='block p-3'>Advertising</a>
                    <a className='block p-3'>Business</a>
                    <a className='block p-3'>How Search Works</a>
                </div>
                <div className='flex'>
                    <a className='block p-3'>Privacy</a>
                    <a className='block p-3'>Terms</a>
                    <a className='block p-3'>Settings</a>
                </div>
            </div>
        </div>
    )
}
