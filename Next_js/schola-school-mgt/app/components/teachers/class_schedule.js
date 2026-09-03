

import { weeklySchedule, scheduleTimeSlots } from '@/app/data';
import React from 'react';
import { Card, Table,  } from 'react-bootstrap';
import DropdownBtn from '../dropdown';

const ScheduleTable = () => {

  const days = weeklySchedule.map(d => d.day);

  const getBadgeStyle = (className) => {
    switch (className) {
      case '9A': return { backgroundColor: '#1a4d8c', color: '#fff' };
      case '9B': return { backgroundColor: '#ffd6ff', color: '#000' };
      case '8C': return { backgroundColor: '#d1f3f8', color: '#000' };
      default: return {};
    }
  };

  return (
    <div >

      <Card
        className="p-4 rounded-4 bg-light border-0  h6-alt"
        style={{ height: '350px', overflow: 'hidden' }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between mb-2">
          <h5 className='text-danger-subtle'
          >Schedule</h5>
          <DropdownBtn text1='weekly' />
        </div>


        <div className="d-flex mb-2">

          {/* Time Column */}
          <div className="text-center bg-dark-light cap-md-reg text-danger rounded-start-4 py-2" style={{ width: '80px' }}>
            Time
          </div>

          {/* Days */}
          <div className="d-flex flex-grow-1 bg-dark-light py-2 rounded-end-4">
            {days.map((day, index) => (
              <div
                key={day + index}
                className="flex-fill text-center   cap-md-reg text-danger "
              >
                {day}
              </div>
            ))}
          </div>

        </div>

        {/* Table */}
        <div className="table-responsive ">
          <Table bordered className="text-center align-middle bg-light">

            <tbody className='bg-light'>
              {scheduleTimeSlots.map((time) => (
                <tr key={time}>

                  {/* Time */}
                  <td className="cap-md-reg text-danger bg-transparent" style={{ width: '80px' }}>
                    {time}
                  </td>

                  {/* Data */}
                  {days.map((day) => {

                    const dayData = weeklySchedule.find(d => d.day === day);
                    const slot = dayData?.slots.find(s => s.time === time);

                    return (
                      <td key={day + time} className='bg-transparent cap-md-reg '>
                        {slot && (
                          <div
                            style={{
                              ...getBadgeStyle(slot.className),
                              padding: '6px',
                              borderRadius: '6px'
                            }}
                          >
                            {slot.className}
                          </div>
                        )}
                      </td>
                    );
                  })}

                </tr>
              ))}
            </tbody>

          </Table>
        </div>

      </Card>
    </div>
  );
};

export default ScheduleTable;



