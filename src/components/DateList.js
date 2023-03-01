import React, { useState } from 'react'
import DateItem from './DateItem'
 import NotFound from './NotFound';
import DatesCount from './DatesCount';
import DatesBtns from './DatesBtns';
const DateList = ({person}) => {
  
    return (
        <>
         
                <DatesCount person={person} />
                <div className='date'>

                    {
                        person.length ? (
                            person.map((item, index) => {
                                return (
                                    <DateItem item={item} key={index} />
                                )
                            })
                        ) : (<NotFound />)
                    }
                </div>
      

         </>
    )
}

export default DateList
