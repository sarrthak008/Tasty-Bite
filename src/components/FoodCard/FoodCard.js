import React from 'react'
import './Foodcard.css';
import two from './two.png'
import three from './three.png'
import four from './four.png'
import five from './five.png'


const getImg =(rating)=>{
   if(rating=='2'){
      return two;
   }else if(rating=='3'){
      return three;
   }else if(rating=='4'){
      return four;
   }else if(rating==5){
      return five;
   }
}


const FoodCard = ({imgUrl ,rating, name, info}) => {
  return (
    <div className='food-card'>
         <div className='img-div'>
            <img src={imgUrl}></img>
         </div>
         <div className='food-info'>
             <span className='food-name'>{name}</span>
             <span className='font-desc'>{info}</span>
             <img src={getImg(rating)} className='rating'></img>
             <button className='buy-btn'>buy now</button>
         </div>
    </div>
 )
}

export default FoodCard
