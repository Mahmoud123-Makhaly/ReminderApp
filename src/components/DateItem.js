import React from 'react'
import img1 from "../images/1.jpg";
const DateItem = ({item}) => {
  return (
    <div className='date-item'>
   <img src={item.url}/>
   <div className='date-item-info'>
    <h4>{item.name}</h4>
    <h6>{item.date}</h6>
   </div>
    </div>
  )
}

export default DateItem
