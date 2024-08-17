import React from 'react'
import './Home.css'
import { ITEAMS } from '../../config/data'

import FoodCard from '../../components/FoodCard/FoodCard'

const Home = () =>{
   return(
    <div className='food-card-container'>
         {ITEAMS.map((iteam,index)=>(
           <FoodCard 
           key={index}
             name={iteam.name}
             imgUrl={iteam.imgUrl}
             info={iteam.info}
             rating={iteam.rating}
            />
         ))}
    </div>
   )
};

export default Home;
