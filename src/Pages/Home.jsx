import React from 'react'; 
import img from '../hero.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";
import Showcard from '../Pages/Showcard'
import { useLoaderData } from "react-router";
import { Link, NavLink } from 'react-router-dom';
const Home = () => { 

    const Cards=useLoaderData() 
    const HomeCards=Cards.slice(0,8)
    
    return (
        <div>
           
       <div className="text-center mt-12 "> 
        <h1 className='font-bold text-black text-6xl'>We Build <br /> <span className='text-purple-600'>Productive</span> Apps</h1> 

        <p className='mt-5 font-light'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, <br />smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p> 

         <div className='m-2 p-2 text-xl flex gap-4  justify-center mt-5 '>
            <a href="https://play.google.com/store/games?hl=en" className='btn flex gap-2 items-center'> <FontAwesomeIcon icon={faGooglePlay} />  Google Play</a>

             <a href="https://www.apple.com/app-store/" className='btn flex gap-2 items-center'>  <FontAwesomeIcon icon={faApple} />  App Store</a>  
         </div> 
        
         </div>
     
              <div className=""> 
                    <img src={img} alt="" className='w-[350px] mx-auto mt-5' /> 

                   <div className="text-white p-5 bg-gradient-to-r from-purple-900 to-purple-600 ">
                    
                    <h1 className='text-center font-bold text-4xl mt-3 '>Trusted By Millions,Built For You</h1> 
                  
                   <div className="mt-4 flex md:flex-wrap justify-around">

                         <div className='text-center'>
                        <p className='font-light'>Total Dawnloads</p>
                        <h1 className='font-bold text-5xl mt-1'>29.6M</h1>
                        <p className='font-light mt-2'>21% More Than last Month</p>
                     </div> 

                     
                     <div className='text-center'>
                        <p className='font-light'>Total Reviews</p>
                        <h1 className='font-bold text-5xl mt-1'>906k</h1>
                        <p className='font-light mt-2'>46% More than last Month</p>
                     </div> 

                     
                     <div className='text-center'>
                        <p className='font-light'>Active Apps</p>
                        <h1 className='font-bold text-5xl mt-1'>132+</h1>
                        <p className='font-light mt-2'>31 More Will Launch</p>
                     </div>
                    
                   </div>
                     
                     </div> 
                         </div>  

                         <p className=' text-center mt-3'>
                              <h1 className='font-bold text-2xl'>Trending Apps</h1> 
                              <h1 className=''>Explore All Trending Apps on the Market Developed by us </h1>


                         </p> 

                         
                         <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-16 p-4">

                         {
                            HomeCards.map(Card=> 
                                <Showcard key={Card.id} Card={Card}></Showcard>
                            )
                         } 
                          
                         





                         </div>








        <Link to="/apps">  

          <button className='btn p-5 mt-10 flex mx-auto bg-gradient-to-r from-purple-600 to-purple-400 text-white'> Show All</button>
        
        </Link>
        








                          </div> 


                
    );
};

export default Home;