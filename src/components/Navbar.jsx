import React from 'react'
import icon from '../images/icon.png'
const Navbar = () => {
    return (
        <nav class="text-gray-600 body-font">
            <div class="container mx-auto p-5 flex md:justify-around flex-col md:flex-row">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img class="w-10 h-10 text-white p-2 bg-cyan-500 rounded-full" src={icon}></img>
                    <span class="ml-3 text-xl">ClimaPi</span>
                </a>
                <div className='w-3/5 flex justify-end'>
                    <label className='mr-4 py-2'>Buscar</label>
                    <input type="text" id="text" class=" w-10/12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
            </div>
        </nav >
    )
}

export default Navbar