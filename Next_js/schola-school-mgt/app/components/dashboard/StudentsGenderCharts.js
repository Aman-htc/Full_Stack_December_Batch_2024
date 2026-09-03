// 'use client';

// import React from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
// import { Card } from 'react-bootstrap';
// import DropdownBtn from "../dropdown";
// import { studentsByGender } from '@/app/data';



// const data = [
//   { name: 'Boys', value: studentsByGender.boys, color: '#1a365d' },
//   { name: 'Girls', value: studentsByGender.girls, color: '#fbd5ff' },
// ];

// export default function StudentsByGender() {








//   return (
//     <Card className="border-0 bg-light shadow-sm h-100 rounded-4 p-3 text-center">
//       {/* Header Section */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h6 className="fw-bold mb-0" style={{ color: '#1a365d' }}>
//           Students by Gender
//         </h6>
//         <div className="bg-info-subtle rounded-2">
//            <DropdownBtn text1="Grade 9" />
//         </div>
//       </div>

//       <div style={{ width: "100%", height: 220, position: 'relative' }}>
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={data}
//               cx="50%"
//               cy="50%"
//               innerRadius={65} 
//               outerRadius={90}
//               paddingAngle={0}
//               dataKey="value"
//               startAngle={90}
//               endAngle={450}
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>

//         {/* Center Text (Total Count) */}
//         <div style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           textAlign: 'center'
//         }}>
//           <h4 className="fw-bold mb-0" style={{ color: '#1a365d' }}>
//             {studentsByGender.total.toLocaleString()}
//           </h4>
//         </div>
//       </div>

//       {/* Custom Legend Section (Same as Image) */}
//       <div className="d-flex justify-content-center gap-4 mt-3">
//         <div className="d-flex align-items-center gap-2">
//           <div style={{ width: 10, height: 10, borderRadius: '2px', backgroundColor: '#1a365d' }}></div>
//           <span className="text-muted small">Boys: <strong style={{ color: '#1a365d' }}>{studentsByGender.boys}</strong></span>
//         </div>
//         <div className="d-flex align-items-center gap-2">
//           <div style={{ width: 10, height: 10, borderRadius: '2px', backgroundColor: '#fbd5ff' }}></div>
//           <span className="text-muted small">Girls: <strong style={{ color: '#1a365d' }}>{studentsByGender.girls}</strong></span>
//         </div>
//       </div>
//     </Card>
//   );
// }


'use client';

import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from 'react-bootstrap';
import DropdownBtn from "../dropdown";
import { getStudentsByGender } from '@/services/dashboardService';

export default function StudentsByGender() {
  const [selectedPeriod, setSelectedPeriod] = useState("class 9");

  const [genderData, setGenderData] = useState({
    total: 0,
    boys: 0,
    girls: 0
  });

  const fetchGenderData = async (period) => {
    try {
      const response = await getStudentsByGender(period);

      if (response?.success) {
        setGenderData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGenderData(selectedPeriod);
  }, [selectedPeriod]);

  const data = [
    {
      name: 'Boys',
      value: genderData.boys,
      color: '#1a365d'
    },
    {
      name: 'Girls',
      value: genderData.girls,
      color: '#fbd5ff'
    }
  ];

  return (
    <Card className="border-0 bg-light shadow-sm h-100 rounded-4 p-3 text-center">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold mb-0" style={{ color: '#1a365d' }}>
          Students by Gender
        </h6>

        <div className="bg-info-subtle rounded-2">


          <DropdownBtn

            text1={selectedPeriod}
            value={selectedPeriod}
            setValue={setSelectedPeriod}
            options1={[
              { label: "Grade 9", value: "class 9" },
              { label: "Grade 10", value: "class 10" },
              { label: "Grade 8", value: "class 8" },
              { label: "Grade 7", value: "class 7" },

            ]}
          />
        </div>
      </div>

      <div style={{ width: "100%", height: 220, position: 'relative' }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={90}
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                  stroke="none"
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}
        >
          <h4
            className="fw-bold mb-0"
            style={{ color: '#1a365d' }}
          >
            {genderData.total}
          </h4>
        </div>
      </div>

      <div className="d-flex justify-content-center gap-4 mt-3">
        <div className="d-flex align-items-center gap-2">
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '2px',
              backgroundColor: '#1a365d'
            }}
          />
          <span className="text-muted small">
            Boys:
            <strong style={{ color: '#1a365d' }}>
              {' '}{genderData.boys}
            </strong>
          </span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '2px',
              backgroundColor: '#fbd5ff'
            }}
          />
          <span className="text-muted small">
            Girls:
            <strong style={{ color: '#1a365d' }}>
              {' '}{genderData.girls}
            </strong>
          </span>
        </div>
      </div>
    </Card>
  );
}