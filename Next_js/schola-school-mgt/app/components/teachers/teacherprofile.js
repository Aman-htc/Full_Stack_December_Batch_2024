// import React from 'react';
// import { Card, Badge, Row, Col, Container } from 'react-bootstrap';
// import { useParams } from "next/navigation";
// // import { teachers } from "@/app/data";
// import Updateprofile from './UpdateProfile';


// const Teacherprofile = ({teacher}) => {
//   // const { id } = useParams();

//   // const teacher = teacher.find((t) => t.id == id);

//   if (!teacher) {
//     return <h3 className="p-3">Teacher not found</h3>;
//   }
  


//   return (
    
//     <div className="">
//   <Card className="shadow-sm border-0 bg-light rounded-4 h-100">

//     <Card.Body className="text-center p-4">
      
     
//       <Updateprofile/>

//       {/* Name */}
//       <h5 className='h6-alt mb-2 text-danger-subtle'>
//         {teacher.
// TeacherName}
//       </h5>

//       {/* Badges */}
//       <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
//         <Badge className="px-3 py-2 bg-dark-light text-dark">
//           {teacher.
// EmployeeID

// }
//         </Badge>
//         <Badge className="px-3 py-2 bg-primary text-dark">
//           {teacher.
// WorkType

// }
//         </Badge>
//       </div>

//       {/* Details */}
//       <div className="p-3 bg-white rounded-4">
//         <Row className="mb-2">
//           <Col xs={5} className="text-danger">Subject</Col>
//           <Col xs={7}>{teacher.
// DepartmentName
// }</Col>
//         </Row>

//         <Row>
//           <Col xs={5} className="text-danger">Class</Col>
//           <Col xs={7}>{teacher.ClassAssigned
// }</Col>
//         </Row>
//       </div>

//     </Card.Body>

//   </Card>
// </div>
//   );
// };

// export default Teacherprofile;



"use client";

import React from "react";
import { Card, Badge, Row, Col } from "react-bootstrap";
import Updateprofile from "./UpdateProfile";

const Teacherprofile = ({ teacher }) => {
 

  if (!teacher) {
    return <h3 className="p-3">Teacher not found</h3>;
  }

  return (
    <div>
      
      <Card className="shadow-sm border-0 bg-light rounded-4 h-100">
        <Card.Body className="text-center p-4">
          <Updateprofile teacher={teacher} />

          {/* Name */}
          <h5 className="h6-alt mb-2 text-danger-subtle">
            {teacher.data.TeacherName}
          </h5>

          {/* Badges */}
          <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
            <Badge className="px-3 py-2 bg-dark-light text-dark">
              {teacher.data.EmployeeID || "N/A"}
            </Badge>

            <Badge className="px-3 py-2 bg-primary text-dark">
              {teacher.data.WorkType || "N/A"}
            </Badge>
          </div>

          {/* Details */}
          <div className="p-3 bg-white rounded-4">
            <Row className="mb-2">
              <Col xs={5} className="text-danger">
                Subject
              </Col>

              <Col xs={7}>
                {teacher.data.DepartmentName || "N/A"}
              </Col>
            </Row>

            <Row>
              <Col xs={5} className="text-danger">
                Class
              </Col>

              <Col xs={7}>
                {teacher.data.ClassAssigned || "N/A"}
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Teacherprofile;