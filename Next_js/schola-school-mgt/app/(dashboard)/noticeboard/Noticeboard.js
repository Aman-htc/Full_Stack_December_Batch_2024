import Breadcrumb from '@/app/components/breadcrum'
import Header from '@/app/components/Header'
import NoticeData from '@/app/components/noticeboard/NoticeData'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'


const Noticeboard = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Container fluid>

        <Header
          text="Notice Board"
          background="bg-primary"
          search={search}
          setSearch={setSearch}
        />
        <div className=' mb-2'>
          <Breadcrumb
            items={[
              { label: "Dashboard", path: "/dashboard" },
              { label: "Notice Board", }
            ]}
          />
        </div>

        <NoticeData search={search} />
      </Container>


    </div>
  )
}

export default Noticeboard
