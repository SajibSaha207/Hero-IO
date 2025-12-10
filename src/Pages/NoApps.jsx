import React from 'react';
import imgEr from '../App-Error.png'
import {Link} from 'react-router-dom'
const NoApps = () => {
    return (
        <div>
            
         <img src={imgEr} alt="" className='mx-auto' /> 

         <p className='text-4xl text-black mt-8'>OOPS !! APP NOT FOUND </p>
         <p className='font-light mt-3'>The App you are requesting is not found on our system.  please try another apps</p>  

         <Link to="/">  

         <button className='text-white bg-gradient-to-r from-purple-600 to-purple-500 btn mt-5'>Go Back</button>
         
         </Link>

         



        </div>
    );
};

export default NoApps;