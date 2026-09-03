
"use client"


import React, { useEffect } from 'react'
import Noticeboard from './Noticeboard'
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
        <Noticeboard/>
      
    </div>
  )
}

export default page
