import React, { useEffect, useState } from 'react'
import DateList from './components/DateList';
import DatesBtns from './components/DatesBtns';
import {data} from "./Data"
  const App = () => {
    const [person, setPerson] = useState(data);
    const deleteData = () => {
        setPerson([])
    }
    const showData = () => {
        setPerson(data)
    }
    useEffect(()=>{
      setPerson([])
          },[])
  return (
<div className='container'>
<div className='date-container'>
<DateList person = {person}/> 
<DatesBtns deleteData={deleteData} showData={showData} />
</div>
</div>
 )
}
export default App;