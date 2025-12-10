import {useLoaderData,Link} from "react-router"
import imge from '../icon-downloads.png'
import imgRAt from '../icon-ratings.png'
import imgRV from '../icon-review.png' 
import {useState,useEffect} from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

  
import { toast, ToastContainer } from 'react-toastify';

const AppDetails = () => { 
 
    const det=useLoaderData()  
    
    const [isInstalled,setisInstalled]=useState(false) 
    useEffect(()=>{

        const installApps=JSON.parse(localStorage.getItem('installApps')) ||[]
        const foundapps=installApps.find(app=>app.id===det.id)

        if(foundapps){
            setisInstalled(true)
        }
    },[det.id]) 





    const handleInstall=()=>{

        const installApps=JSON.parse(localStorage.getItem('installApps')) || [] 

        if(!installApps.find(app=>app.id===det.id)){

            installApps.push(det) 
            localStorage.setItem("installApps",JSON.stringify(installApps)) 
            setisInstalled(true)
             
            toast.success("Apps install Starting")




        }  

    }




    if(!det) return null
    return (
         <div className="max-w-5xl mx-auto p-6">
      

      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white shadow-lg rounded-xl p-6">
        
       
        <img 
          src={det.image} 
          alt=''
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-lg flex-shrink-0" 
        />

  
        <div className="flex-1 flex flex-col gap-4 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left ml-10">
             Apps Name :{det.title}</h1> 
           
             <p>Developed by <span className='font-bold text-purple-500 font-xl'> Sajib Saha </span></p> 
             <hr />

         
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 text-center md:text-left mt-12">
            <div className="bg-green-100 px-4 py-2 rounded font-semibold "> <img src={imge} alt="" className='mx-auto'/> 
              Downloads: {(det.downloads/1000000).toLocaleString()} M
            </div>

            <div className="bg-orange-100 px-4 py-2 rounded font-semibold"> <img src={imgRAt} alt="" className='mx-auto'/> 
              Rating: {det.ratingAvg}
            </div>

            {det.reviews && (
              <div className="bg-blue-100 px-4 py-2 rounded font-bold "> <img src={imgRV} alt="" className='mx-auto'/> 
                Reviews: {(det.reviews/1000).toFixed(2)}K
              </div> 
              
            ) } 
            
          </div>
                 <button className='btn bg-green-400 text-white w-60 mt-5 text-xl'onClick={handleInstall} disabled={isInstalled} >{isInstalled ? ' Installed' : `Install Now (${det.size}MB)`} </button>
         
          </div> 
          
        </div> 
            
        <ToastContainer position="top-center" autoClose={2000} /> 
       
         
         <div>
            <hr />
           


<div className="mt-10 w-full">
  <h1 className="text-2xl font-bold mb-4 ">Ratings</h1>

  <div className="w-full h-80 bg-gray-50 rounded-lg shadow-md p-4">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical" 
        data={det.ratings}
        margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />  
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="count" fill="orange" radius={[0, 8, 8, 0]} />
      </BarChart>
    </ResponsiveContainer> 

    
  </div> 
  <hr />

     <div className="mt-5 ">
        <h1 className="font-bold text-2xl">Description</h1> 
        <p className="font-light mt-2">{det.description}</p>
     </div>


</div>
            


         </div>





      </div>

   
   
   
    );
};

export default AppDetails;