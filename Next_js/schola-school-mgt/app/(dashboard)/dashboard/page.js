
// import Header from '@/app/components/Header'

// import React from 'react'
// import EarningsChart from '@/app/components/dashboard/EarningsCharts'
// import StudentsByGender from '@/app/components/dashboard/StudentsGenderCharts'
// import StudentAttendanceChart from '@/app/components/dashboard/StudentsAttendance'
// import TodoList from '@/app/components/dashboard/TodoList'


// const page = () => {
//   return (
//     <div>
//       <Header text='Dashboard'/>
//       <CustomTooltip/>
//       <EarningsChart/>
//       <StudentsByGender/>
//       <StudentAttendanceChart/>
//       <TodoList/>


//     </div>
//   )
// }

// export default page

"use client"


import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import { useRouter } from "next/navigation";

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
      <Dashboard />

    </div>
  )
}

export default page

