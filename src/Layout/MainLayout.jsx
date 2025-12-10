import Navber from '../Components/Navber'
import LoadingSpiner from '../Components/LoadingSpiner'
import Footer from '../Components/Footer'

import { Outlet, useNavigation } from "react-router-dom"; // <-- FIXED



const MainLayout = () => {  

    const navigation=useNavigation() 

    const isLoading=navigation.state==='loading'



    return (
        <div className='min-h-screen flex flex-col'>
             <Navber></Navber>  

          
            {
                isLoading ? (  
                       <div className="mt-10 flex justify-center">

                    <LoadingSpiner></LoadingSpiner> 
             </div>
            
                    
                ) : ( 
                       <div className='flex-1 mb-20' >
                        <Outlet></Outlet>
             </div>
                )
            } 
                       
             
             <Footer></Footer> 


        </div>
    );
};

export default MainLayout;