import React from 'react'
import './Home.css'
import { ITEAMS ,BRAND_NAME} from '../../config/data'

import FoodCard from '../../components/FoodCard/FoodCard'

const Home = () =>{
   return(
      <>
   <h1 className='brand-name'>{BRAND_NAME}</h1>
    <div className='slogan-style'><span>enjoy the taste</span></div>
    <div className='food-card-container'>
         {ITEAMS.map((iteam)=>(
           <FoodCard 
             name={iteam.name}
             imgUrl={iteam.imgUrl}
             info={iteam.info}
             rating={iteam.rating}
            />
         ))}
    </div>
   </>
   )
};

export default Home;
