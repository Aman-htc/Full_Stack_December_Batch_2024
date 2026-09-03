
// 'use client';

// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   ReferenceLine,
//   Legend
// } from 'recharts';
// import { Card } from 'react-bootstrap';
// import DropdownBtn from "../dropdown";
// import { earningsReport } from "@/app/data";

// const CustomTooltip = ({ active, payload, label }) => {
//   if (!active || !payload || payload.length === 0) return null;

//   return (
//     <div className="bg-white shadow-sm p-3 rounded-4" style={{ minWidth: 180 }}>
//       <div className="text-muted small mb-2">{label}</div>

//       {payload.map((entry, index) => (
//         <div key={index} className="d-flex justify-content-between small mb-1">

//           <div className="d-flex align-items-center gap-2">
//             <div
//               style={{
//                 width: 12,
//                 height: 2,
//                 backgroundColor: entry.stroke
//               }}
//             />
//             <span className="text-muted text-capitalize">
//               {entry.name}
//             </span>
//           </div>

//           <strong>${Math.abs(entry.value).toLocaleString()}</strong>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default function EarningsChart() {


//   const chartData = earningsReport.map(item => ({
//     ...item,
//     negExpenses: -item.expenses
//   }));

//   return (
//     <Card className="border-0 shadow-sm rounded-4 p-4 bg-light">

//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h5 className=" h6-alt mb-0 text-danger-subtle ">
//           Earnings
//         </h5>

//         <div className="bg-info-subtle rounded-3 px-2">
//           <DropdownBtn text1="Last Year" />
//         </div>
//       </div>

//       {/* Chart */}
//       <div style={{ width: "100%", height: 250 }}>
//         <ResponsiveContainer>

//           <AreaChart
//             data={chartData}
//             margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
//           >


//             <defs>
//               <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#51c9d1" stopOpacity={0.4}/>
//                 <stop offset="95%" stopColor="#1a365d" stopOpacity={0}/>
//               </linearGradient>

//               <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="5%" stopColor="#fbd5ff" stopOpacity={0}/>
//                 <stop offset="95%" stopColor="#fbd5ff" stopOpacity={0.4}/>
//               </linearGradient>
//             </defs>

//             {/*  Grid */}
//             <CartesianGrid
//               vertical={false}
//               stroke="#f0f0f0"
//               strokeDasharray="3 3"
//             />

//             {/*  X Axis */}
//             <XAxis
//               dataKey="month"
//               axisLine={false}
//               tickLine={false}
//               tick={{ fill: "#66706D", fontSize: "11px" }} 
//               dy={10}
//             />

//             {/*  Y Axis */}
//             <YAxis
//               axisLine={false}
//               tickLine={false}
//               tick={{ fill: "#66706D", fontSize: "11px" }} 
//               tickFormatter={(val) => `$${Math.abs(val / 1000)}K`}
//               domain={[-6000, 6000]}
//               ticks={[-6000, -3000, 0, 3000, 6000]}
//             />

//             {/*  Tooltip */}
//             <Tooltip
//               content={<CustomTooltip />}
//               cursor={{ stroke: "#e5e7eb" }}
//             />

//             {/*  Legend */}
//             <Legend
//             className='ms-4'
//               verticalAlign="top"
//               align="left"
//               iconType="plainline"
//               wrapperStyle={{ paddingBottom: 20,  marginLeft:20}}
//               formatter={(value) => (
//                 <span className="text-danger body-xs-reg  me-3">
//                   {value === "earnings" ? "Earnings" : "Expenses"}
//                 </span>
//               )}
//             />

//             {/* Center Line */}
//             <ReferenceLine y={0} stroke="#e5e7eb" />

//             {/*  Earnings */}
//             <Area
//               type="stepAfter"
//               dataKey="earnings"
//               stroke="#1a365d"
//               strokeWidth={3}
//               fill="url(#colorEarnings)"
//               name="earnings"
//               dot={false}
//             />

//             {/*  Expenses */}
//             <Area
//               type="stepAfter"
//               dataKey="negExpenses"
//               stroke="#fbd5ff"
//               strokeWidth={3}
//               fill="url(#colorExpenses)"
//               name="expenses"
//               dot={false}
//             />

//           </AreaChart>

//         </ResponsiveContainer>
//       </div>

//     </Card>
//   );
// }


'use client';

import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend
} from 'recharts';
import { Card } from 'react-bootstrap';
import DropdownBtn from "../dropdown";
import { getEarningsExpenses } from '@/services/dashboardService';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="bg-white shadow-sm p-3 rounded-4" style={{ minWidth: 180 }}>
      <div className="text-muted small mb-2">{label}</div>

      {payload.map((entry, index) => (
        <div key={index} className="d-flex justify-content-between small mb-1">
          <div className="d-flex align-items-center gap-2">
            <div
              style={{
                width: 12,
                height: 2,
                backgroundColor: entry.stroke
              }}
            />
            <span className="text-muted text-capitalize">
              {entry.name}
            </span>
          </div>

          <strong>
            ${Math.abs(entry.value).toLocaleString()}
          </strong>
        </div>
      ))}
    </div>
  );
};

export default function EarningsChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("last_year");




  const [chartData, setChartData] = useState([]);

  const fetchEarningsData = async (period) => {
    try {

      const response = await getEarningsExpenses(period);

      

      if (response?.success) {
        const formattedData = (response.data || []).map(item => ({
          ...item,
          negExpenses: -(item.expenses || 0)
        }));

        setChartData(formattedData);
      }
    } catch (error) {
      console.error("Earnings API Error:", error);
    }
  };

  useEffect(() => {
    fetchEarningsData(selectedPeriod);
  }, [selectedPeriod]);

  const maxValue = Math.max(
    ...chartData.flatMap(item => [
      item.earnings || 0,
      item.expenses || 0
    ]),
    1000
  );

  return (
    <Card className="border-0 shadow-sm rounded-4 p-4 bg-light">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className=" h6-alt mb-0 text-danger-subtle ">
          Earnings
        </h5>

        <div className="bg-info-subtle rounded-3 px-2">

          <DropdownBtn

            text1={selectedPeriod}
            value={selectedPeriod}
            setValue={setSelectedPeriod}
            options1={[
              { label: "Last year", value: "last_year" },
              { label: "This year", value: "this_year" },
              { label: "Last 6 Months", value: "last_6_months" },

            ]}
          />
        </div>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>

          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >

            <defs>
              <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#51c9d1" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#1a365d" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fbd5ff" stopOpacity={0} />
                <stop offset="95%" stopColor="#fbd5ff" stopOpacity={0.4} />
              </linearGradient>
            </defs>

            {/* Grid */}
            <CartesianGrid
              vertical={false}
              stroke="#f0f0f0"
              strokeDasharray="3 3"
            />

            {/* X Axis */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#66706D", fontSize: "11px" }}
              dy={10}
            />

            {/* Y Axis */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#66706D", fontSize: "11px" }}
              tickFormatter={(val) =>
                `$${Math.abs(val / 1000).toFixed(0)}K`
              }
              domain={[-maxValue, maxValue]}
            />

            {/* Tooltip */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#e5e7eb" }}
            />

            {/* Legend */}
            <Legend
              className='ms-4'
              verticalAlign="top"
              align="left"
              iconType="plainline"
              wrapperStyle={{
                paddingBottom: 20,
                marginLeft: 20
              }}
              formatter={(value) => (
                <span className="text-danger body-xs-reg me-3">
                  {value === "earnings"
                    ? "Earnings"
                    : "Expenses"}
                </span>
              )}
            />

            {/* Center Line */}
            <ReferenceLine y={0} stroke="#e5e7eb" />

            {/* Earnings */}
            <Area
              type="stepAfter"
              dataKey="earnings"
              stroke="#1a365d"
              strokeWidth={3}
              fill="url(#colorEarnings)"
              name="earnings"
              dot={false}
            />

            {/* Expenses */}
            <Area
              type="stepAfter"
              dataKey="negExpenses"
              stroke="#fbd5ff"
              strokeWidth={3}
              fill="url(#colorExpenses)"
              name="expenses"
              dot={false}
            />

          </AreaChart>

        </ResponsiveContainer>
      </div>

    </Card>
  );
}





