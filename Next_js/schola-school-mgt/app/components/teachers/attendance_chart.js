import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Cell } from "recharts";

import { Card, Dropdown } from "react-bootstrap";
import { teacherAttendanceOverview } from "@/app/data";
import DropdownBtn from "../dropdown";

import { useEffect, useState } from "react";
import { getAttendanceOverview } from "@/services/teacherService";



export default function AttendanceChart() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [viewType, setViewType] = useState("weekly");

  //  API CALL
  const fetchAttendanceData = async (type) => {
    try {
      const response = await getAttendanceOverview(type);

      
      setAttendanceData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // first load
  useEffect(() => {
  fetchAttendanceData(viewType);
}, [viewType]);

  

  const minValue = Math.min(
    ...attendanceData.map((d) => d.present)
  );




  return (
    <Card className="border-0 bg-light shadow-sm  h-100 rounded-4 p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="text-danger-subtle h6 mb-0">
          Present Overview
        </h6>

        <Dropdown>
          <Dropdown.Toggle className="bg-primary border-0 btn-sm rounded-2">
            {viewType}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setViewType("weekly")}>
              Weekly
            </Dropdown.Item>

            <Dropdown.Item onClick={() => setViewType("monthly")}>
              Monthly
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            data={attendanceData}
            margin={{ top: 10, bottom: 20 }}
          >

            <CartesianGrid vertical={false} stroke="#eee" />

            {/* X AXIS */}
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#66706D", fontSize: 10 }}
              dy={20}
            />

            <YAxis hide />

            {/* BAR */}
            <Bar
              dataKey="present"
              barSize={50}
              radius={[6, 6, 0, 0]}
              isAnimationActive={false}
              style={{ transform: "translateY(15px)" }}
            >
              {attendanceData.map((entry, index) => (
                <Cell
                  key={`Cell-${index}`}
                  fill={
                    entry.present === minValue ? "#FFCDFD" : "#FCEBFC"
                  }
                />
              ))}
            </Bar>

            {/* LINE */}
            <Line
           
              type="monotone"
              dataKey="present"
              stroke="#15456F"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#15456F",
                stroke: "#15456F",
                strokeWidth: 5,
              }}
              activeDot={{ r: 10 }}
            />

            {/* LABEL */}
            <Line
              dataKey="present"
              stroke="transparent"
              label={({ x, y, value }) => {
                if (value !== minValue) return null;

                return (
                  <g>
                    <rect
                      x={x - 15}
                      y={y - 40}
                      width={29}
                      height={22}
                      rx={5}
                      fill="#000"
                    />
                    <text
                      x={x}
                      y={y - 25}
                      textAnchor="middle"
                      fill="#fff"
                      fontSize={11}
                    >
                      {value}
                    </text>
                  </g>
                );
              }}
            />

          </ComposedChart>
        </ResponsiveContainer>
      </div>

    </Card>
  );
}

