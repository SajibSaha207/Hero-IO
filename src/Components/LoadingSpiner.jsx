import React from 'react';

const LoadingSpiner = () => {
    return (
        <div className='flex gap-5 mx-auto items-center '>
             
        <span className="loading loading-bars loading-xl"></span>
        <span className="loading loading-bars loading-xl"></span>
        <span className="loading loading-bars loading-xl"></span>

        </div>
    );
};

export default LoadingSpiner;