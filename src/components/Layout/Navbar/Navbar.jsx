import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../../public/assets/lion.jpg'
import { HiHome } from "react-icons/hi";
import { ImCart} from "react-icons/im";
import { FaBoxOpen } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className='w-[100%] bg-blue-950 text-white h-[8vh] flex  items-center font-serif'>
            <div className='w-[50%] flex'>
                <div className='w-[10%]'>
                    <Image src={logo} className='w-[80%]' />
                </div>
                <div className='w-[90%] flex items-center text-[30px] font-serif'>
                    <h1>Bienvenido a Lion Style</h1>
                </div>
            </div>
            <div className=' flex list-none  w-[40%] text-[18px] text-center'>
                
                <Link href={'/home'} className='w-[22%]'><li><ul className='flex gap-x-2'><HiHome className='w-[15%] h-[10%]'/>Inicio</ul></li></Link>

                <Link href={'/products'} className='w-[28%]'><li ><ul className='flex gap-x-2'><FaBoxOpen className='w-[15%] h-[10%]'/>Productos</ul></li></Link>
                
                <Link href={'/'} className='w-[25%]'><li ><ul className='flex gap-x-2'><ImCart className='w-[15%] h-[10%]'/>Carrito</ul></li></Link>

                <Link href={'/'}className='w-[25%]'><li><ul className='flex gap-x-2'><MdOutgoingMail className='w-[15%] h-[10%]'/>Contacto</ul></li></Link>
                
            </div>
            <div className='w-[10%]  h-full flex items-center justify-center'>
                <FaUserCircle className='w-[15%] h-[100%]'/>
            </div>
        </nav>
    )
}

export default Navbar