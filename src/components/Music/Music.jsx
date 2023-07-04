// import { useEffect } from 'react';

// const BackgroundMusic = () => {
//   useEffect(() => {
//     const audio = new Audio('/assets/musica.mp3');
//     audio.loop = true;
//     audio.play();
//   }, []);

//   return null;
// };

// export default BackgroundMusic;

import { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/musica.mp3');
    audioRef.current.loop = true;

    const playAudio = () => {
      audioRef.current.play();
      document.removeEventListener('click', playAudio);
    };

    document.addEventListener('click', playAudio);

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  return null;
};

export default BackgroundMusic;


