
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';

import Layout from '../../components/Layout/Layout';
import { getallProducts, getimgerandom } from '../../States/products/productsSlice';
import Loader from '../../components/Loader/Loader';

const Index = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.products.photos);
  const [dataReady, setDataReady] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getallProducts());
      await dispatch(getimgerandom());
      setTimeout(() => {
        setDataReady(true);
      }, 1000);
    };

    fetchData();
  }, [dispatch]);

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
      swiperInstance.setTransition(1000);
    }
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
      swiperInstance.setTransition(1000);
    }
  };

  return (
    <Layout>
      <div className='w-full h-screen flex pt-5 justify-center items-center'>
        {!dataReady ? (
          <Loader />
        ) : (
          <>
            <Swiper
              grabCursor={true}
              effect={'creative'}
              creativeEffect={{
                prev: {
                  shadow: true,
                  origin: 'left center',
                  translate: ['-5%', 0, -200],
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: 'right center',
                  translate: ['5%', 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              modules={[EffectCreative]}
              className="mySwiper5 w-[88%] h-[50%]   lg:w-[70%] lg:h-[90%] flex justify-center "
              onSwiper={setSwiperInstance}
            >
              {photos.map((p, i) => (
                <SwiperSlide key={i}>
                  <div className=' w-[100%] lg:w-[90%] h-[100%] border-solid border-4 border-blue-950 bg-slate-50'>
                    <div className='w-[100%] h-[10%] lg:h-[10%] text-[15px] lg:text-[30px] justify-center items-center flex font-bold font-serif'>
                      <h2>{p.name}</h2>
                    </div>
                    <div className='w-[100%] h-[60%] md:h-[75%]  lg:h-[80%]  flex justify-center '>
                      <img src={p.image} alt={`p${i}`}  className='w-[90%] h-[100%] '/>
                    </div>
                    <div className='w-[100%] h-[30%] lg:h-[15%] flex  justify-center  text-[11px]  lg:text-[18px] font-semibold p-1'>
                      <h2>{p.descripcion}</h2>
                    </div>


                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="absolute left-[3vw] z-[999] md:left-[0] lg:left-[10vw] top-1/2 transform -translate-y-1/2 " onClick={handlePrev}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="absolute  right-[3vw]  md:right-[0]   lg:right-[13vw] z-[999] top-1/2 transform -translate-y-1/2" onClick={handleNext}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Index;

