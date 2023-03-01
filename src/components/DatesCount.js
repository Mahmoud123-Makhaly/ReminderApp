import React from 'react'

const DatesCount = ({person}) => {
  return (
    <div>
          <h3 className='mb-2'>لديك {person.length} مواعيد اليوم</h3>

    </div>
  )
}

export default DatesCount
