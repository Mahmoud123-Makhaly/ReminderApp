import React from 'react'

const DatesBtns = ({deleteData , showData}) => {
    const onDelete = ()=>{
        deleteData() 
    }
    const onShow = ()=>{
showData()
    }
  return (
    <div className='date-btns mt-2'>
  <div className='row'>
  <div className='col'>
    <button onClick={onDelete} type="button" class="btn btn-primary my-button">مسح الكل </button>
  </div>
  <div className='col d-flex flex-row-reverse'>
  <button onClick={onShow} type="button" class="btn btn-primary me-auto my-button">عرض البيانات</button>
  </div>
  </div>
</div>
  )
}

export default DatesBtns