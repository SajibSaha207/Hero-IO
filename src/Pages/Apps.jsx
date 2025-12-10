import React, {useState} from 'react';
import AppShow from '../Pages/AppShow';
import { useLoaderData } from 'react-router';
import NoApps from './NoApps'

const Apps = () => { 

  const allApps=useLoaderData()
  const [searchTerm, setSearchTerm] = useState('') 

  const filterApps=allApps.filter(app=> 
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

    return (
        <div>  
            
            <div className="mt-10 m-10 ">

              <div className="text-center">
            <h1 className='text-4xl font-bold'>Our All Applications</h1> 
                 <p className='mt-2 font-light'>Explore All Apps on the Market developed by us. We Code for Millions</p>
              </div> 

              <div className='flex justify-between m-10 font-bold text-2xl'>
             ({filterApps.length}) Apps Found 

             <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search Apps" value={searchTerm}
  
   onChange={(e)=>setSearchTerm(e.target.value)} />
                  </label>
                    </div>

                  {
                    filterApps.length > 0 ? (<AppShow Cards={filterApps}></AppShow>): ( 
                        <p className='text-center text-gray-500 mt-10 text-lg font-medium'> 
                        <NoApps></NoApps>

                        </p>
                    )


                  }

            
                



            </div>







           
        </div>
    );
};

export default Apps;