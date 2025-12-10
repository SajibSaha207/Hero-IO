import React from 'react';
//  import {useLoaderData} from 'react-router'
import Showcard from '../Pages/Showcard'
const AppShow = ({Cards=[]}) => { 
  
//    const Cards=useLoaderData()   


    return ( 
        
        <div className='grid grid-cols-1 md:grid-cols-4 gap-9 gap-y-10  p-4" mt-[80px] shadow-md' >
             
             
          { Cards.map(Card=> 
            <Showcard Card={Card} key={Card.id}></Showcard>
          )}

        </div>
    );
};

export default AppShow;