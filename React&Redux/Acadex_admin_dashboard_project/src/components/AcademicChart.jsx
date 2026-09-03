import React, { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Card, Col, Row } from "react-bootstrap";
import { academicData } from "../data/js/jsonPath";

import {FilterButton} from './main/index'






const AcademicChart = () => {
  const chartData = academicData.academicPerformance;

  // Highest value detect
  const maxItem = chartData.reduce(
    (prev, curr) => (curr.value > prev.value ? curr : prev),
    { value: 0 }
  );

  // Map year → type for XAxis custom tick
  const yearTypeMap = useMemo( () => {
    const map = {};
    chartData.forEach((item) => {
      map[item.year] = item.type;
      
    })
    return map;
    
  },[chartData])
  
  

  const CustomXAxisTick = ({ x, y, payload }) => {
    if (!payload || payload.value == null) return null;
    const year = payload.value;
   
    const type = yearTypeMap[year];
   

    return (
      <g transform={`translate(${x},${y})`}>
        {type && (
          <text
            x={0}
            y={0}
            dy={10}
            textAnchor="middle"
            fill="#A6A6A8"
            fontSize={10}
          >
            {type}
          </text>
        )}
        <text
          x={0}
          y={0}
          dy={30}
          textAnchor="middle"
          fill="#A6A6A8"
          
          fontSize={10}
        >
          {year}
        </text>
      </g>
    );
  };

  return (
    <Card className=" h-100  py-2 px-2 py-md-3 px-md-3  bg-color border-color  rounded-4">
      <Row className="align-items-center mb-3">
        <Col>
          <h6 className="mb-0 text-dark Title-4-Bold">
            Academic Performance
          </h6>
        </Col>
        <Col xs="auto">
          <FilterButton text="Last 4 year" />
        </Col>
      </Row>

      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={chartData} margin={{ left: -10, right: 10, top: 10, bottom: 30 }}>
            {/* Gradient */}
            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2f9e6f" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#2f9e6f" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            {/* Horizontal & Vertical grid */}
            <CartesianGrid vertical={false} stroke="#EEEEEE" strokeWidth={1} />
            <CartesianGrid horizontal={false} stroke="#EEEEEE" strokeDasharray="3 6" strokeOpacity={0.6} />

            {/* XAxis */}
            <XAxis
              dataKey="year"
              type="category"
              axisLine={false}
              tickLine={false}
              height={14}
              tick={<CustomXAxisTick />}
            />

            {/* YAxis */}
            <YAxis
              ticks={[0, 30, 66, 100]}
              tickFormatter={(v) => `${v}%`}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A6A6A8", fontSize: 10, fontFamily: "sans-serif" }}
            />

            {/* Area */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2f9e6f"
              strokeWidth={3}
              fill="url(#colorGreen)"
              dot={({ cx, cy, payload }) => {
                if (payload.value ===  maxItem.value) {
                  return (
                    <g>
                      <line x1={cx} y1={cy} x2={cx} y2={200} stroke="#2f9e6f" strokeDasharray="4 6" strokeWidth={2} />
                      <rect x={cx - 22} y={cy - 42} rx={6} ry={6} width={44} height={24} fill="#000" />
                      <text x={cx} y={cy - 26} textAnchor="middle" fill="#fff" fontSize={10} fontWeight="600">
                        {payload.value}%
                      </text>
                      <circle cx={cx} cy={cy} r={7} fill="#2f9e6f" />
                    </g>
                  );
                }
                return <circle cx={cx} cy={cy} r={5} fill="#fff" stroke="#2f9e6f" strokeWidth={2} />;
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div className="text-center gray-200 XSmall-Regular py-5">
          No academic performance data yet. Once data is available, it will appear here.
        </div>
      )}
    </Card>
  );
};

export default AcademicChart;
