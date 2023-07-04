// import Image from 'next/image'
// import React from 'react'
// import img from '../../public/assets/lion.jpg'
// // import landing from "../../assets/landing.mp4"

// const index = () => {
//   return (
//     <div className=' w-screen h-screen object-cover '>
//       <video autoPlay loop='3' muted className='w-full h-full object-cover'>
//         <source src='assets/landing.mp4' />
//       </video>
//       <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white  font-bold w-full '>
//         <div className='flex flex-col items-center '>
//           <Image src={img} className='w-[20%]' />
//           <h1 className='text-[45px]'>Bienvenido a lion Style</h1>
//           <button className="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white rounded-md shadow-sm bg-transparent hover:bg-red-500 hover:border-transparent hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-[2%]">
//             Ingresar
//           </button>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default index
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import img from '../../public/assets/lion.jpg';
import Link from 'next/link';
import BackgroundMusic from '../components/Music/Music';

const Index = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.opacity = '1';
  }, []);

  return (
    <div className="w-screen h-screen object-cover">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="assets/landing.mp4" />
      </video>
      <div
        ref={contentRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white font-bold w-full opacity-0 transition-opacity duration-1000"
      >
        <div className="flex flex-col items-center font-serif">
          <Image src={img} alt="Lion" className="w-[20%]" />
          <h1 className="text-[45px]">Bienvenido a Lion Style</h1>
          <Link href={"/home"} className="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white rounded-md shadow-sm bg-transparent hover:bg-red-500 hover:border-transparent hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-[2%]">
            Ingresar
          </Link>
        </div>
      </div>
      <BackgroundMusic />
    </div>
  );
};

export default Index;
