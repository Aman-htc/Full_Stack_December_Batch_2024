

import CalendarPage from '@/app/components/calendar/CalendarPage'
import Header from '@/app/components/Header'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumb from '@/app/components/breadcrum'

const Calendar = () => {

  const [search, setSearch] = useState("");
  return (
    <Container fluid>
      <div className=''>


        <Header
          text="Calendar"
          background="bg-primary"
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className='mb-6' >

        <Breadcrumb
          items={[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Calendar", }
          ]}
        />
      </div>
      <div className='mt-3'>

        <CalendarPage search={search} />
      </div>


    </Container>
  )
}

export default Calendar

