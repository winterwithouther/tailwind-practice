import React from 'react'

export default function page() {
    return (
    <div className='flex flex-wrap bg-white text-black'>
        <div className='w-full sm:w-8/12 mb-10'>
            <div className='container mx-auto h-full sm:p-10'>
                <nav className='flex px-4 justify-between items-center'>
                    <div className='text-4xl font-bold'>
                        Plant<span className='text-green-700'>.</span>
                    </div>
                    <div>
                        <img src="https://image.flaticon.com/icons/svg/497/497348.svg"></img>
                    </div>
                </nav>
                <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                    <div className="w-full">
                        <h1 className="text-4xl lg:text-6xl font-bold">Find your <span className='text-green-700'>greeny</span> stuff for your room</h1>
                        <div className='w-20 h-2 bg-green-700 my-4'></div>
                        <p className='text-xl mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
                        <button className='bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow'>Learn more</button>
                    </div>
                </header>
            </div>
        </div>
        <img className='w-full h-48 object-cover sm:h-screen sm:w-4/12' src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
    </div>)
}
