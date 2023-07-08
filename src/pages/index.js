
// import Image from 'next/image';
// import { useEffect, useRef } from 'react';
// import img from '../../public/assets/lion.jpg';
// import Link from 'next/link';
// import BackgroundMusic from '../components/Music/Music';

// const Index = () => {
//   const contentRef = useRef(null);

//   useEffect(() => {
//     contentRef.current.style.opacity = '1';
//   }, []);

//   return (
//     <div className="w-screen h-screen object-cover">
//       <video autoPlay loop muted className="w-full h-full object-cover">
//         <source src="assets/landing.mp4" />
//       </video>
//       <div
//         ref={contentRef}
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white font-bold w-full opacity-0 transition-opacity duration-[3s] h-[50%] flex items-center justify-center "
//       >
//         <div className="flex flex-col items-center font-serif  w-[40%] h-[100%] justify-center bg-transparent border-2 border-white rounded-[10px] backdrop-blur-[20px]">
//           <Image src={img} alt="Lion" className="w-[45%]" />
//           <h1 className="text-[45px]">Bienvenido a Lion Style</h1>
//           <Link href={"/home"} className="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white rounded-md shadow-sm bg-red-500   hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-[2%]">
//             Ingresar
//           </Link>
//         </div>
//       </div>
//       <BackgroundMusic />
//     </div>
//   );
// };

// export default Index;



import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import img from '../../public/assets/lion.jpg';
import Link from 'next/link';
import BackgroundMusic from '../components/Music/Music';
import { GiSoundOff } from "react-icons/gi";
import { GiSoundOn } from "react-icons/gi";

const Index = () => {
  const contentRef = useRef(null);
  const [isMusicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    contentRef.current.style.opacity = '1';
  }, []);

  const handleMusicToggle = () => {
    setMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="w-screen h-screen object-cover">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="assets/landing.mp4" />
      </video>
      <div
        ref={contentRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white font-bold w-full opacity-0 transition-opacity duration-[3s] h-[50%] flex items-center justify-center "
      >
        <div className="flex flex-col items-center font-serif  w-[95%] h-[98%] sm:w-[75%] sm:h-[75%] lg:w-[35%] lg:h-[100%]  justify-center bg-transparent border-2 border-white rounded-[10px] backdrop-blur-[20px]">
          <button
            className="absolute top-4 left-4 text-white text-[25px] sm:text-[35px] bg-red bg-transparent border-2 border-white p-2 rounded-[10px] outline-none cursor-pointer"
            onClick={handleMusicToggle}
          >
            {isMusicPlaying ? (
              <GiSoundOn className='w-[100%]'/>
            ) : (
              <GiSoundOff className='w-[100%]'/>
            )}
          </button>
          <Image src={img} alt="Lion" className="w-[45%]" />
          <h1 className="text-[30px] sm:text-[40px] lg:text-[35px] text-center">Bienvenido a Lion Style</h1>
          <Link href={"/home"} className="relative inline-flex items-center justify-center px-4 py-3 text-base font-medium text-white border border-white rounded-md shadow-sm bg-red-500   hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-[5%] text-[15px] sm:text-[25px] lg:text-[18px] lg:mt-[2%]">
            Ingresar
          </Link>
        </div>
      </div>

      {isMusicPlaying && <BackgroundMusic />}
    </div>
  );
};

export default Index;

