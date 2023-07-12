
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../../../../public/assets/lion.jpg'
import { HiHome } from "react-icons/hi";
import { ImCart } from "react-icons/im";
import { FaBoxOpen } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { ImMenu } from "react-icons/im";

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <nav className='w-[100%] bg-blue-950 text-white h-[8vh] flex items-center font-serif'>
            <div className='w-[80%] md:w-[50%] flex'>
                <div className=' w-[25%] lg:w-[10%] md:w-[18%]'>
                    <Image src={logo} className='w-[100%] lg:w-[70%]' />
                </div>
                <div className='w-[90%] flex items-center text-[15px] md:text-[20px] lg:text-[30px] font-serif'>
                    <h1>Bienvenido a Lion Style</h1>
                </div>
            </div>

            <div className='hidden md:flex lg:flex list-none w-[50%] lg:text-[20px] text-center md:items-center lg:items-center'>
                <Link href={'/home'} className='w-[22%] md:w-[25%] '>
                    <li>
                        <ul className='flex gap-x-2'>
                            <HiHome className='w-[15%] h-[10%] lg:w-[10%] ' />Inicio
                        </ul>
                    </li>
                </Link>

                <Link href={'/products'} className='w-[28%] md:w-[29%] '>
                    <li>
                        <ul className='flex gap-x-2'>
                            <FaBoxOpen className='w-[15%] h-[10%] lg:w-[10%]' />Productos
                        </ul>
                    </li>
                </Link>

                <Link href={'/'} className='w-[25%]  md:w-[24%] '>
                    <li>
                        <ul className='flex gap-x-2'>
                            <ImCart className='w-[15%] h-[10%] lg:w-[10%]' />Carrito
                        </ul>
                    </li>
                </Link>

                <Link href={'/'} className='w-[25%]  md:w-[25%] '>
                    <li>
                        <ul className='flex gap-x-2'>
                            <MdOutgoingMail className='w-[15%] h-[10%] lg:w-[10%]' />Contacto
                        </ul>
                    </li>
                </Link>
            </div>

            {/* Mostrar el menú en pantallas móviles */}
            <div className='md:hidden flex  ml-2 w-[20%] justify-end pr-1'>
                <ImMenu className='text-2xl' onClick={toggleMenu} />
            </div>

            {/* <div className='w-[10%] h-full flex items-center justify-center '>
                <FaUserCircle className='w-[15%] h-[100%] text-[20px]' />
            </div> */}

            {/* Menú desplegable en pantallas móviles */}
            {menuVisible && (
                <div className='md:hidden absolute z-[999] top-[8vh]  w-full bg-blue-950 text-white '>
                    <Link href={'/home'} className='flex - justify-center  border-b-2 border-white'>
                        <ul className=' p-2 w-[100%] flex - justify-center'><HiHome className='w-6 h-6 mr-2' />Inicio</ul>
                    </Link>
                    <Link href={'/products'} className='flex - justify-center  border-b-2 border-white'>
                        <ul className='p-2 w-[100%] flex - justify-center'><FaBoxOpen className='w-6 h-6 mr-2' />Productos</ul >
                    </Link>
                    <Link href={'/'} className='flex - justify-center  border-b-2 border-white'>
                        <ul className=' p-2 w-[100%] flex - justify-center'><ImCart className='w-6 h-6 mr-2' />Carrito</ul >
                    </Link>
                    <Link href={'/'} className='flex - justify-center  border-b-2 border-white'>
                        <ul className=' p-2 w-[100%] flex - justify-center'><MdOutgoingMail className='w-6 h-6 mr-2' />Contacto</ul >
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
