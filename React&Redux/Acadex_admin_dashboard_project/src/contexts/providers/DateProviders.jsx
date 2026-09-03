


import { useState } from 'react'
import { DateContext } from '../Context'
import { scheduleData } from '../../data/js/jsonPath'

function DateProvider({ children }) {
  const dates = scheduleData.map(item => item.date);


  const sortedDates = [...new Set(dates)].sort(
    (a, b) => new Date(a) - new Date(b)
  );
  const firstUpcomingDate = sortedDates[0];
  console.log(firstUpcomingDate)



  const [date, setDate] = useState(new Date(firstUpcomingDate))
  return (
    <div>
      <DateContext.Provider value={{ date, setDate }}>
        {children}
      </DateContext.Provider>
    </div>
  )
}

export default DateProvider
