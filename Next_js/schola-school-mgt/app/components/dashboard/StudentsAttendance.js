'use client';

import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
  CartesianGrid
} from 'recharts';
import { Card } from 'react-bootstrap';
import DropdownBtn from "../dropdown";
import { studentAttendance } from '@/app/data';
import { getStudentAttendanceOverview } from '@/services/studentService';

const FixedTopLabel = ({ x, width, value }) => {
  const centerX = x + width / 2;

  return (
    <text
      x={centerX}
      y={60}
      textAnchor="middle"
      fill="#1a365d"
      fontSize="13"
      fontWeight="600"
    >
      {value.toLocaleString()}
    </text>
  );
};

export default function StudentAttendanceChart() {


  const [overview, setAttendanceOverview] = useState([])
  const [peoverview, setPreoverview] = useState('This Week')


  const fetchAttendanceOverview = async (period) => {
    try {
      const res = await getStudentAttendanceOverview(period);

     

      setAttendanceOverview(res.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAttendanceOverview(peoverview);
  }, [peoverview]);

  // const maxCapacity = 1300;

  return (
    <Card className="border-0 bg-light shadow-sm h-100 rounded-4 p-2">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="text-danger-subtle h6-alt mb-0">
          Student Attendance
        </h6>

        <div className="bg-info-subtle rounded-3">
          <DropdownBtn
            text1={peoverview}
            value={peoverview}
            setValue={setPreoverview}
            options1={[
              { label: "This Week", value: "This Week" },
              { label: "This Month", value: "This Month" },
              { label: "Last Month", value: "Last Month" },

            ]}
          />
        </div>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={overview}
            margin={{ top: 70, right: 10, left: 0, bottom: 10 }}
            barSize={35}
          >

            <CartesianGrid
              vertical={false}
              stroke="#e9ecef"
            />

            {/* X Axis */}
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#66706D", fontSize: 11 }}
              dy={20}
            />


            {/* Bars */}
            <Bar
              dataKey="students"
              radius={[10, 10, 0, 0]}
              background={{ fill: '#F4F4F6', radius: [10, 10, 0, 0] }}
            >
              <LabelList content={<FixedTopLabel />} />

              {overview.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.day === 'Thu' ? '#1a365d' : '#FBD5FF'}
                />
              ))}
            </Bar>

          </BarChart>

        </ResponsiveContainer>
      </div>

    </Card>
  );
}

