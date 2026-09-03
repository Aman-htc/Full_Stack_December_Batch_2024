
"use client"

import React, { useEffect } from 'react'
import Calendar from './Calendar'
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter();
  
    useEffect(() => {
      const token = localStorage.getItem("idToken");
  
      if (!token) {
        router.push("/signin");
      }
    }, []);



  return (
    <div>
      <Calendar/>
        
      
    </div>
  )
}

export default page
