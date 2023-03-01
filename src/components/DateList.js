import React, { useState } from 'react'
import DateItem from './DateItem'
import { data } from '../Data'
import NotFound from './NotFound';
const DateList = () => {
    const [person , setPerson] = useState(data);
    const deleteData = ()=>{
        setPerson([])
    }
    const showData = ()=>{
        setPerson(data)
    }
  return (
 <>
   <div className='date-container'>
    <h3 className='mb-2'>لديك {person.length} مواعيد اليوم</h3>
    <div className='date'>
        
{
    person.length?(
        person.map((item , index)=>{
return(
    <DateItem item={item}/>
)
        })
    ):(<NotFound/>)
}
    </div>
    <div className='date-btns mt-2'>
  <div className='row'>
  <div className='col'>
    <button onClick={deleteData} type="button" class="btn btn-primary my-button">مسح الكل </button>
  </div>
  <div className='col d-flex flex-row-reverse'>
  <button onClick={showData} type="button" class="btn btn-primary me-auto my-button">عرض البيانات</button>
  </div>
  </div>
</div>
   </div>
 </>
  )
}

export default DateList
