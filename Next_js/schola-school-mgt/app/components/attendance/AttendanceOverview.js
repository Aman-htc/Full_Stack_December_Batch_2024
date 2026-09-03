"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import DropdownBtn from '../dropdown';
import {  attendanceOverviewChart } from '@/app/data';
import { getAttendanceOverview } from '@/services/attendanceService';



const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const AttendanceOverview = () => {
   const [attendanceOverview, setAttendanceOverview] = useState([]);
   const [selectedPeriod, setSelectedPeriod] = useState("This Month");

  const loadAttendanceOverview = async (period = selectedPeriod) => {
  try {
    console.log("Selected Period:", period);

    const response = await getAttendanceOverview(period);

    console.log("Attendance Overview:", response);

    setAttendanceOverview(response.data || []);
  } catch (error) {
     if (error?.response?.status === 404) {
    setAttendanceOverview([]);
    return;
  }

  console.error(error);
  }
};


useEffect(() => {
  loadAttendanceOverview(selectedPeriod);
}, [selectedPeriod]);



  

  const chartData = {
    series: [
      {
        name: 'Students',
        data: attendanceOverview.map(d => d.students)
      },
      {
        name: 'Teachers',
        data: attendanceOverview.map(d => d.teachers)
      },
      {
        name: 'Staff',
        data: attendanceOverview.map(d => d.staff)
      }
    ],
    options: {
      chart: {
        type: 'area',
        toolbar: { show: false }, 
        zoom: { enabled: false }
      },
      colors: ['#F9A8D4', '#06B6D4', '#15456F'], 
      stroke: {
        curve: 'monotoneCubic', 
        width: 3
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.05,
          stops: [0, 90, 100]
        }
      },
      dataLabels: { enabled: false },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        fontSize: '14px',
        offsetY: -10,
        markers: { radius: 4 },
        labels:{
            colors:"#66706D",
            fontSize:"12px"
        }
      },
      xaxis: {
        categories: attendanceOverview.map(d => d.month),
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels:{
            style:{
                colors:"#66706D",
                fontSize:"10px"
            }
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          formatter: (val) => `${val}%`,
          style:{
            colors:"#66706D",
            fontSize:"10px"

          }
        }
      },
      grid: {
        borderColor: '#f1f1f1',
        xaxis: { lines: { show: false } } 
      },
      tooltip: {
        shared: true,
        intersect: false,
      }
    }
  };

  return (
    <div className="card border-0 shadow-sm p-4 rounded-4 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="h6-alt text-danger-subtle" >Attendance Overview</h5>
       {/* <DropdownBtn text1="Last Semester "/>
        */}
        <DropdownBtn
          text1={selectedPeriod}
          value={selectedPeriod}
          setValue={setSelectedPeriod}
          options1={[
            { label: "Last Semester", value: "Last Semester" },
            { label: "This Semester", value: "This Semester" },
            { label: "This Month", value: "This Month" },
            { label: "Last Month", value: "Last Month" },
          ]}
        />
        
      </div>
      
      <div id="chart">
        <Chart 
          options={chartData.options} 
          series={chartData.series} 
          type="area" 
          height={190} 
        />
      </div>
    </div>
  );
};

export default AttendanceOverview;
