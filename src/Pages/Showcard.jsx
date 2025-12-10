import rating from '../icon-downloads.png' 
import icnRat from '../icon-ratings.png'
import { Link } from 'react-router-dom';

const Showcard = ({Card}) => { 
    // console.log(Card)
    
    return (
      <Link to={`/apps/${Card.id}`}>
         
     <div>
           <div className="card bg-base-100 shadow-sm max-w-[450px] max-h-[300px] mx-auto hover:scale-105 flex flex-col gap-y-5">
  <figure>
    <img
      src={Card.image}
      alt="Try again" className='p-5 rounded-xl w-[300px] h-[210px]' />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title flex items-baseline gap-2 ">{Card.title}: <span className=" text-base">{Card.description}</span></h2>
    
        <div className='flex justify-between mt-5 gap-4'>
            <p className=' inline-flex gap-3 items-center font-bold text-xl w-[80px] h-[50px] bg-green-200 p-2 text-green-700'> <img src={rating} alt="" />{Card.downloads /1000000} M</p> 
            <p className='inline-flex gap-3 items-center font-bold text-xl  bg-orange-200 p-2 text-orange-800 w-[80px] h-[50px] '><img src={icnRat} alt="" />{Card.ratingAvg}</p>
        </div>
  </div>
</div>  

        </div>


         </Link>
   
    );
};

export default Showcard;