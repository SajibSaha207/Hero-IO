import { createBrowserRouter } from "react-router";

import MainLayout from "../Layout/MainLayout";
import Eror from "../Eror"
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'
import AppDetails from '../Pages/AppDetails'
import LoadingSpiner from '../Components/LoadingSpiner'
 const router=createBrowserRouter([

  {
    path:"/",
    element:<MainLayout></MainLayout>,
    errorElement:<Eror></Eror> ,
     hydrateFallbackElement:<LoadingSpiner></LoadingSpiner> ,

    children:[
        {
            index:true,
            element:<Home></Home>,
            loader:()=>fetch('/Data.json')
            
        } ,
        {
           path:'/apps',
            element:<Apps></Apps>,
            loader:()=>fetch('/Data.json')
            
        } , 

        {
         path:'/apps/:id',
         element:<AppDetails></AppDetails>,
         loader:({params})=>
          fetch('/Data.json').then(res=>res.json()) 
          .then(data=>data.find(a=>String(a.id)===String(params.id)) ||null)
         }

         ,

         {
           path:'/installation',
            element:<Installation></Installation>,
            
        }
    ]

    
  }

 ]) 

 export default router