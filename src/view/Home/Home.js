import React from 'react'
import './Home.css'
import { ITEAMS ,BRAND_NAME ,BRAND_SLOGAN} from '../../config/data'

import FoodCard from '../../components/FoodCard/FoodCard'

const Home = () =>{
   return(
      <>
   <h1 className='brand-name'>{BRAND_NAME}</h1>
    <div className='slogan-style'><span>{BRAND_SLOGAN}</span></div>
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
