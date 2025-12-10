import React from 'react'; 
import {useEffect,useState} from 'react'

import {toast,ToastContainer} from 'react-toastify'
  

const Installation = () => { 

const [installedApps, setInstalledApps] = useState([]);


useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installApps")) || [];
    setInstalledApps(apps);
}, []); 



 const handleUninstall=(id)=>{

    const update=installedApps.filter(app=>app.id !==id) 
    localStorage.setItem('installApps',JSON.stringify(update))
    setInstalledApps(update) 
    toast.success("App Uninstall Succesfull")
 }


    return (
        <div className=''>
             
               <div className="bg-gray-100 p-5">

           
             <h1 className='font-bold text-4xl text-center mt-1 p-5'>Your Installed Apps</h1>
             <p className='text-center font-light mt-2'>Explore All Trending Apps on the Market Developed by us</p>

                  </div> 

                  <div className="cart grid grid-cols-1 gap-3 p-3">

                   {
                    installedApps.length===0 ?(

                 <p className='text-5xl text-center mt-10 font-bold text-red-500 col-span-full'>No Apps installed Yet</p>

                 ):(
                     installedApps.map(ap=>(

                       <div key={ap.id} className="flex flex-col-1 items-center justify-between  bg-gray-200 rounded-md shadow-md m-2"> 
                        
                         <div className=" flex gap-5 "> 
                            
                            <img src={ap.image} alt="" className='w-[90px] h-[80px] shadow-md bg-white ' /> 
                            <h2 className='font-bold mt-5' >{ap.title} : {ap.description}</h2> 

                            
                            
                             </div> 

                             <div className="">

                                <button className='btn bg-green-500 p-5 m-3 text-white'onClick={()=>handleUninstall(ap.id)} >Uninstall</button>
                             </div>
                       
                       
                       
                       </div>

                     ))


                 )
                   }



             <ToastContainer position="top-center" autoClose={2000} />



                  </div>






        </div>
    );
};

export default Installation;