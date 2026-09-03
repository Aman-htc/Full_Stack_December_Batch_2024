
"use client"


import Header from '@/app/components/Header'
import React, { useEffect, useState } from 'react'
import Attendance from './Attendance'
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter();
  
    useEffect(() => {
      const token = localStorage.getItem("idToken");
  
      if (!token) {
        router.push("/signin");
      }
    }, []);
    const [search, setSearch] = useState("");


  return (
    
    <div>
      {/* <Header text='Attendance ' background='bg-primary'/> */}
      <Header
          text="Calendar"
          background="bg-primary"
          search={search}
          setSearch={setSearch}
        />

      <Attendance search={search}/>
    
    </div>
  )
}

export default page
