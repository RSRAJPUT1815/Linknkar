import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-gray-800 text-white p-4'>
        <div className='text-2xl font-bold '><Link href={"/"}>Linknker</Link></div>
        <ul className='flex space-x-4 cursor-pointer justify-center items-center'>
            <Link href="/"><li className='font-bold hover:text-gray-300'>Home</li></Link>
            <Link href="/About"><li className='font-bold hover:text-gray-300'>About</li></Link>
            <Link href="/Shortner"><li className='font-bold hover:text-gray-300'>Shortner</li></Link>
            <Link href="/ContactUs"><li className='font-bold hover:text-gray-300'>ContactUs</li></Link>
            <li className='flex space-x-4 font-bold text-sm'>
                <Link href="/Shortner"><button className=' cursor-pointer  bg-blue-600 hover:bg-blue-700 p-2 rounded-xl'>Try now</button></Link>
                <Link href="/github/RSRAJPUT1815"><button className=' cursor-pointer  bg-blue-600 hover:bg-blue-700 p-2 rounded-xl'>Git Hub</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
