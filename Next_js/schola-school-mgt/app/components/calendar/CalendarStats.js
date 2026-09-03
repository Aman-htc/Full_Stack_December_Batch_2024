



'use client';

import React, { useEffect, useState } from 'react';

import {
  LayoutGrid,
  BookOpen,
  CalendarDays,
  CircleDollarSign,
  FileText,
} from 'lucide-react';

import {
  Row,
  Col,
  Card,
} from 'react-bootstrap';

import { getShedules } from '@/services/calendarService';

const CalendarStats = ({
    activeCategory,
    setActiveCategory,
    selectedDate,
}) => {

    const currentMonth = selectedDate.getMonth();
const currentYear = selectedDate.getFullYear();

  const [schedules, setSchedules] = useState([]);

  const getdata = async () => {
    try {
      const res = await getShedules();

      const formattedData = (res.data || []).map((item) => ({
        schedule_id: item.ScheduleID,
        category: item.Category,
        title: item.Title,
        schedule_date: item.ScheduleDate,
        start_time: item.StartTime,
        end_time: item.EndTime,
        room_number: item.RoomNumber,
        notes: item.Notes,
      }));

      setSchedules(formattedData);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);




  const monthSchedules = schedules.filter((item) => {

    const date = new Date(item.schedule_date);

    return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
    );

});
  // Dynamic Stats
  const stats = [
  {
    id: 1,
    category: "all",
    title: "All Schedule",
    value: monthSchedules.length,
  },
  {
    id: 2,
    category: "academic",
    title: "Academic",
    value: monthSchedules.filter(
      x => x.category.toLowerCase() === "academic"
    ).length,
  },
  {
    id: 3,
    category: "events",
    title: "Events",
    value: monthSchedules.filter(
      x => x.category.toLowerCase() === "events"
    ).length,
  },
  {
    id: 4,
    category: "finance",
    title: "Finance",
    value: monthSchedules.filter(
      x => x.category.toLowerCase() === "finance"
    ).length,
  },
  {
    id: 5,
    category: "administration",
    title: "Administration",
    value: monthSchedules.filter(
      x => x.category.toLowerCase() === "administration"
    ).length,
  },
];

  const icons = {
    all: <LayoutGrid size={14} />,
    academic: <BookOpen size={14} />,
    events: <CalendarDays size={14} />,
    finance: <CircleDollarSign size={14} />,
    administration: <FileText size={14} />,
  };

  return (
    <div>

      <Row className="g-3">

        {stats.map((stat) => (

          <Col
            key={stat.id}
            xs={12}
            sm={6}
            lg
          >

            <Card
              onClick={() => setActiveCategory(stat.category)}
              className={`border-0 rounded-4 shadow-sm px-3 py-3 h-100 ${
                activeCategory === stat.category
                  ? 'bg-primary'
                  : 'bg-light'
              }`}
              style={{
                cursor: 'pointer',
                transition: '0.3s',
              }}
            >

              <div className="d-flex align-items-center justify-content-between">

                <div className="d-flex align-items-center gap-2">

                  <div
                    className={`d-flex align-items-center justify-content-center rounded-circle
                    ${
                      activeCategory === stat.category
                        ? 'bg-light text-dark'
                        : stat.category === 'all'
                        ? 'bg-primary text-danger-subtle'
                        : stat.category === 'academic'
                        ? 'bg-secondary text-danger-subtle'
                        : stat.category === 'events'
                        ? 'bg-primary text-danger-subtle'
                        : stat.category === 'finance'
                        ? 'bg-warning text-light'
                        : stat.category === 'administration'
                        ? 'bg-success text-danger-subtle'
                        : ''
                    }`}
                    style={{
                      width: '30px',
                      height: '30px',
                    }}
                  >
                    {icons[stat.category]}
                  </div>

                  <div className="body-lg text-dark">
                    {stat.title}
                  </div>

                </div>

                <div className="h4 text-danger-subtle">
                  {stat.value}
                </div>

              </div>

            </Card>

          </Col>

        ))}

      </Row>

    </div>
  );
};

export default CalendarStats;




// 'use client';

// import React, { useEffect, useState } from 'react';
// import {
//   LayoutGrid,
//   BookOpen,
//   CalendarDays,
//   CircleDollarSign,
//   FileText,
// } from 'lucide-react';

// import { Row, Col, Card } from 'react-bootstrap';
// import { getShedules } from '@/services/calendarService';

// const CalendarStats = ({ activeCategory, setActiveCategory }) => {
//   const [schedules, setSchedules] = useState([]);

  
//   const getdata = async () => {
//     try {
//       const res = await getShedules();

//       const formattedData = (res.data || []).map((item) => ({
//         schedule_id: item.ScheduleID,
//         category: item.Category?.toLowerCase(),
//         title: item.Title,
//         schedule_date: item.ScheduleDate,
//         start_time: item.StartTime,
//         end_time: item.EndTime,
//         room_number: item.RoomNumber,
//         notes: item.Notes,
//       }));

//       setSchedules(formattedData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getdata();
//   }, []);


//   const categoryStats = schedules.reduce((acc, item) => {
    
//     const cat = item.category;

//     if (!acc[cat]) {
//       acc[cat] = 0;
//     }

//     acc[cat] += 1;

//     return acc;
//   }, {});

//   const statsArray = Object.keys(categoryStats).map((key) => ({
//     category: key,
//     value: categoryStats[key],
//   }));


//   const icons = {
//     all: <LayoutGrid size={14} />,
//     academic: <BookOpen size={14} />,
//     events: <CalendarDays size={14} />,
//     finance: <CircleDollarSign size={14} />,
//     administration: <FileText size={14} />,
//   };

//   return (
//     <div>
//       <Row className="g-3">

//         {statsArray.map((stat) => (
//           <Col key={stat.category} xs={12} sm={6} lg>

//             <Card
//               onClick={() => setActiveCategory(stat.category)}
//               className={`border-0 rounded-4 shadow-sm px-3 py-3 h-100 ${
//                 activeCategory === stat.category
//                   ? 'bg-primary text-white'
//                   : 'bg-light'
//               }`}
//               style={{ cursor: 'pointer' }}
//             >

//               <div className="d-flex justify-content-between align-items-center">

//                 {/* ICON + NAME */}
//                 <div className="d-flex align-items-center gap-2">

//                   <div
//                     className={`rounded-circle d-flex align-items-center justify-content-center ${
//                       activeCategory === stat.category
//                         ? 'bg-light text-dark'
//                         : 'bg-primary text-white'
//                     }`}
//                     style={{ width: 30, height: 30 }}
//                   >
//                     {icons[stat.category] || <FileText size={14} />}
//                   </div>

//                   <div className="body-lg text-capitalize">
//                     {stat.category}
//                   </div>

//                 </div>

//                 {/* VALUE */}
//                 <div className="h4 text-danger-subtle">
//                   {stat.value}
//                 </div>

//               </div>

//             </Card>

//           </Col>
//         ))}

//       </Row>
//     </div>
//   );
// };

// export default CalendarStats;