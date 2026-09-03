


'use client';

import React, { useState } from 'react';

import CalendarStats from './CalendarStats';
import CalendarData from './CalendarData';

const CalendarPage = ({search} ) => {

  const [activeCategory, setActiveCategory] = useState("all");

  
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>

      <CalendarStats
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        selectedDate={selectedDate}
                  
      />

      <div className="mt-3">

        <CalendarData
          search={search} 
          activeCategory={activeCategory}
          selectedDate={selectedDate}        
          setSelectedDate={setSelectedDate} 
          
        />

      </div>

    </div>
  );
};

export default CalendarPage;