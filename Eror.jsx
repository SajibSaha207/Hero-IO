import React from 'react';
import img from './error-404.png'
const Eror = () => {
    return (
        <div className="w-[690px] h-[550px]  mx-auto mt-16">

         <img src={img} alt="" className='flex   mx-auto' />
         
          <h1 className='font-bold text-5xl text-center mt-5'>Oops,page not found !</h1>
          <p className='font-light text-center mt-4'>The page you are looking for is not available</p> 
          <button className='btn flex mx-auto mt-5 bg-gradient-to-r from-purple-600 to-purple-400'>Go Back !</button>


        </div>
    );
};

export default Eror;