
import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import { getallProducts, sortPrice, sortProducts, toggleSortOrder, toggleSortPrice,  } from '../../States/products/productsSlice';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20; // Número de productos por página

  const products = useSelector((state) => state.products.products);
  // const status = useSelector((state) => state.products.status);
  const sortOrder = useSelector((state) => state.products.sortOrder);
  const sortOrderPrice = useSelector((state) => state.products.sortOrderPrice);


  const dispatch = useDispatch();

  const handleToggleSortOrder = () => {
    dispatch(toggleSortOrder());
    dispatch(sortProducts());
  };

  const handleByPrice = () => {
    dispatch(toggleSortPrice());
    dispatch(sortPrice());
  };

  useEffect(() => {
    dispatch(getallProducts());
  }, [dispatch]);


  

  // Obtener los productos correspondientes a la página actual
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleProducts = products.slice(startIndex, endIndex);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(products.length / pageSize);

  // Funciones para cambiar de página
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Layout>
      <div className='h-[8vh] w-full flex items-center justify-center gap-2'>
        <button onClick={handleToggleSortOrder} className='bg-blue-950  text-white text-[18px] border-2 border-black p-2 font-semibold font-sans rounded-[10px] flex items-center justify-center'>
          {sortOrder === 'asc' ? 'Ordenar A ↨ Z' : 'Ordenar Z ↨ A'}
        </button>

        <button onClick={handleByPrice} className='bg-blue-950  text-white text-[18px] border-2 border-black p-2 font-semibold font-sans rounded-[10px] flex items-center justify-center'>
          {sortOrderPrice === 'max' ? 'Precio ↑' : 'Precio ↓'}
        </button>

      </div>
      <div className='w-full '>
        <Cards p={visibleProducts} />
      </div>
      <div className='flex justify-center mt-4'>
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className='pagination-button mr-2 bg-blue-950 p-1 text-white font-serif rounded-[10px] hover:bg-red-500 cursor-pointer'
        >
          Retroceder
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-button ${currentPage === index + 1 ? 'bg-red-700 text-white' : 'border-2 border-blue-950'
              } w-[2%] mr-2 rounded-[10px] hover:bg-red-700 hover:border-red-700 hover:text-white`}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className='pagination-button ml-2 bg-blue-950 p-1 text-white font-serif rounded-[10px] hover:bg-green-600 cursor-pointer '
        >
          Avanzar
        </button>
      </div>
    </Layout>
  );
};

export default Index;
