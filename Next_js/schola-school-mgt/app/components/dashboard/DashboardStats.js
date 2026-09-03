"use client"



import {  Contact, GraduationCap,Trophy } from 'lucide-react';



import React, { useEffect, useState } from 'react'
import Stats from '../Stats';
import { dashboardStats } from '@/app/data';

import { PiChalkboardTeacher } from 'react-icons/pi';
import { getDashboardstats } from '@/services/dashboardService';
// import { useEffect } from 'react';

const DashboardStats = () => {
  const [statsData, setStatsData] = useState([]);

const getstats = async () => {
  try {
    const response = await getDashboardstats();

    const data = response?.data;

    setStatsData([
      {
        id: 1,
        title: "Students",
        value: data?.EnrolledStudents || 0,
        icon: "students",
      },
      {
        id: 2,
        title: "Teachers",
        value: data?.ActiveTeachers || 0,
        icon: "teachers",
      },
      {
        id: 3,
        title: "Staff",
        value: data?.SupportStaff || 0,
        icon: "staff",
      },
      {
        id: 4,
        title: "Awards",
        value: data?.TotalAwards || 0,
        icon: "awards",
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getstats();
}, []);





  const iconMap = {
  students: GraduationCap,
  teachers:  PiChalkboardTeacher  ,
  staff:  Contact,
  awards: Trophy,
};

// Style Mapping
const iconStyles = {
  students: {
    color: "#CEEAF1",
    bg: "#15456F",
  },
  teachers: {
    color: "#15456F",
    bg: "#FFCDFD",
  },
  staff: {
    color: "#fff",
    bg: "#15456F",
  },
  awards: {
    color: "#15456F",
    bg: "#FFCDFD",
  },}
  return (
    <div className='mb-4 mt-3'>
      <Stats data={statsData} iconStyles={iconStyles} iconMap={iconMap}/>

      
    </div>
  )
}

export default DashboardStats
