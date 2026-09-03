import { workloadSummary } from '@/app/data';
import React, { useEffect } from 'react';
import { Card, } from 'react-bootstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DropdownBtn from '../dropdown';
import { getTeacherWorkloadSummary } from "@/services/teacherService";



const WorkloadSummary = ({ teacher }) => {

  const teacherId = teacher?.data?.TeacherID



  const loadWorkloadSummary = async () => {
    try {
      const response = await getTeacherWorkloadSummary(
        teacherId,
        "last_8_months"
      );

      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    loadWorkloadSummary()

  },[])







  return (
    <div className="w-100">
      <Card className="border-0 shadow-sm bg-light p-2 rounded-4 w-100">

        <Card.Body>

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0 text-danger-subtle h6-alt">
              Workload Summary
            </h6>
            <DropdownBtn text1='last 8 month' />
          </div>

          {/* Legend */}
          <div className="d-flex gap-3 mb-2 small text-muted flex-wrap">
            <div className="d-flex align-items-center">
              <span className='bg-secondary me-2 rounded-1 wh-10'></span>
              Total Classes
            </div>
            <div className="d-flex align-items-center">
              <span className='bg-primary me-2 rounded-1 wh-10' ></span>
              Teaching Hours
            </div>
            <div className="d-flex align-items-center">
              <span className='bg-warning me-2 rounded-1 wh-10'></span>
              Extra Duties
            </div>
          </div>

          {/* Chart */}
          <div style={{ width: '100%', height: 200 }}>


            <ResponsiveContainer width="100%" height="100%">

              <AreaChart
                data={workloadSummary}
                margin={{ top: 20, right: 10, left: -15, bottom: 0 }}
              >


                <CartesianGrid
                  stroke="#f0f0f0"
                  vertical={true}
                  horizontal={true}
                />


                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    fill: "#8d8d8d",
                  }}
                />


                <YAxis
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                  ticks={[0, 40, 80, 120, 160]}
                  domain={[0, 160]}
                  tickFormatter={(v) => `${v} h`}
                  tick={{
                    fontSize: 12,
                    fill: "#8d8d8d",
                  }}
                />


                <Tooltip
                  cursor={{
                    stroke: "#d9d9d9",
                    strokeWidth: 1,
                  }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    padding: "14px",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  }}
                />


                <Area
                  type="monotone"
                  dataKey="extraDuties"
                  stackId="1"
                  stroke="none"
                  fill="#103e78"
                />


                <Area
                  type="monotone"
                  dataKey="teachingHours"
                  stackId="1"
                  stroke="none"
                  fill="#d1f3f8"
                />


                <Area
                  type="monotone"
                  dataKey="totalClasses"
                  stackId="1"
                  stroke="none"
                  fill="#ffd6ff"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>
          {/* </div> */}

        </Card.Body>

      </Card>
    </div >
  );
};

export default WorkloadSummary;
