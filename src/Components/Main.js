import React from 'react'

const Main = ( ) => {
    const data = new Date();
  return (
<div className="main">
<div className='overlay'>
<div className="container">
      <h1>{ data.getHours()%12}</h1>
      <ul>
        <li>React makes it painless</li>
       <li>Build encapsulated components</li>
       <li>Since component logic</li>
       <li>Component-Based</li>
       <li>Learn Once, Write Anywhere</li>
      </ul>
    </div>
</div>

</div>
  )
}

export default Main
