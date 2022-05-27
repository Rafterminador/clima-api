import React from 'react'
import icon from '../images/icon.png'
import getData from '../utils/getData'
const Navbar = () => {
    return (
        <nav className="text-gray-600 body-font mb-8">
            <div className="container flex md:justify-between flex-col md:flex-row">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="w-10 h-10 text-white p-2 bg-cyan-500 rounded-full" src={icon}></img>
                    <span className="ml-3 text-xl">ClimaPi</span>
                </a>
                <div className='md:w-9/12 flex justify-end gap-4'>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleChange}>Buscar</button>
                    <input type="text" id="text" className="md:w-8/12 w-10/12 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                </div>
            </div>
        </nav >
    )
}
function handleChange() {
    let text = document.getElementById("text")
    let data = getData(text.value)
    text.value = ""
    console.log(data)
}

export default Navbar