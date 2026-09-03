

// "use client";
// import React from "react";
// import { Form, Row, Col, Card } from "react-bootstrap";
// import Flatpickr from "react-flatpickr";
// import "flatpickr/dist/themes/material_blue.css";

// const WorkInfo = ({ formik }) => {
//   return (
//     <Card className="p-4 shadow-sm border-0  bg-light rounded-4 mb-3" >
//       <h6 className="text-dark h6-alt  mb-3">Work Details</h6>
//       <Row className="mb-4">
//         <Col md={4}>
//           <Form.Group>

//             <Form.Label className="text-dark cap-lg-med">
//               Joining Date
//             </Form.Label>

//             <Flatpickr
//               options={{
//                 dateFormat: "Y-m-d",
//               }}
//               value={formik.values.joiningDate}
//               onChange={(selectedDates, dateStr) => {
//                 formik.setFieldValue("joiningDate", dateStr);
//               }}
//               className={`form-control bg-light border-danger-light rounded-3 py-2 ${formik.errors.joiningDate &&
//                   formik.touched.joiningDate
//                   ? "is-invalid"
//                   : ""
//                 }`}

//             />

//             <Form.Control.Feedback
//               type="invalid"
//               className="text-success-light custom-feedback"
//             >
//               {formik.errors.joiningDate}
//             </Form.Control.Feedback>

//           </Form.Group>
//         </Col>
//         <Col md={4}>
//           <Form.Group>
//             <Form.Label className="text-dark cap-lg-med">Class Assigned</Form.Label>
//             <Form.Control
//               type="text"
//               {...formik.getFieldProps("classAssigned")}
//               isInvalid={!!formik.errors.classAssigned && formik.touched.classAssigned}
//               className="bg-light border-danger-light rounded-3 py-2"
//             />
//             <Form.Control.Feedback type="invalid" className="text-success-light custom-feedback">{formik.errors.classAssigned}</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         <Col md={4}>
//           <Form.Group>
//             <Form.Label className="text-dark cap-lg-med">Work Type</Form.Label>
//             <Form.Select
//               {...formik.getFieldProps("workType")}
//               className="bg-light border-danger-light rounded-3 py-2"
//             >
//               <option value="Full Time" className="text-dark cap-lg-med">Full Time</option>
//               <option value="Part Time" className="text-dark cap-lg-med">Part Time</option>
//             </Form.Select>
//           </Form.Group>
//         </Col>
//       </Row>
//     </Card>
//   );
// };
// export default WorkInfo;


// "use client";

// import React from "react";
// import { Form, Row, Col, Card } from "react-bootstrap";
// import Flatpickr from "react-flatpickr";
// import "flatpickr/dist/flatpickr.css";

// const WorkInfo = ({ formik }) => {

//   const errorClass = (fieldName) =>
//     formik.errors[fieldName] &&
//       formik.touched[fieldName]
//       ? "border-success-light"
//       : "";

//   return (

//     <Card className="p-4 shadow-sm border-0 bg-light rounded-4 mb-3">

//       <h6 className="text-dark h6-alt mb-3">
//         Work Details
//       </h6>

//       <Row className="mb-4 g-3">

//         {/* Joining Date */}
//         <Col md={4}>

//           <Form.Group>

//             <Form.Label className="text-dark cap-lg-med">
//               Joining Date
//             </Form.Label>

//             {/* <Flatpickr
//               options={{
//                 dateFormat: "Y",
//                 maxDate: "today",

//               }}
//               value={formik.values.joiningDate || ""}
//               onChange={(date) => {
//                 formik.setFieldValue(
//                   "joiningDate",
//                   date[0] ? date[0].toISOString().split("T")[0] : ""
//                 );
//               }}
//               onClose={() =>
//                 formik.setFieldTouched(
//                   "joiningDate",
//                   true
//                 )
//               } */}
//               {/* // className={`form-control bg-light rounded-3 py-3 border  ${errorClass( */}
//               // "joiningDate"
//               {/* // )}`} */}


//               {/* // onReady={(selectedDates, dateStr, instance) => { */}

//               /* Main Calendar */
//               // instance.calendarContainer.classList.add(
//               //   "rounded-4",
//               //   "shadow-lg",
//               //   "border-0",
//               //   "overflow-hidden",
//               //   "bg-success"
//               // );

//               /* Header */
//               // const header =
//               //   instance.calendarContainer.querySelector(
//               //     ".flatpickr-months"
//               //   );

//               // header?.classList.add(
//               //   "bg-info",
//               //   "py-2",
//               //   "px-2"
//               // );

//               /* Month + Year text */
//               // header?.querySelectorAll(
//               //   ".flatpickr-current-month, .cur-year"
//               {/* // ).forEach((el) => { */}
//               //   el.classList.add(
//               //     "text-dark",
//               //     "h6-alt"
//               //   );
//               {/* // }); */}



//               // Weekdays
//               // instance.calendarContainer
//               // .querySelectorAll(".flatpickr-weekday")
//               {/* // .forEach((el) => { */}
//               //   el.classList.add(
//               //     "text-bark",
//               //     "body-lg-med",

//               //   );
//               {/* // }); */}

//               /* Days */
//               //     instance.calendarContainer
//               //       .querySelectorAll(".flatpickr-day")
//               {/* //       .forEach((el) => { */}
//               //         el.classList.add(
//               //           "rounded-circle"
//               {/* //         ); */}
//               {/* //       }); */}

//               {/* //   }} */}
//               {/* // /> */}
//               <Flatpickr
//                 options={{
//                   dateFormat: "Y-m-d",
//                 }}
//                 value={formik.values.joiningDate || ""}
//                 onChange={(date) => {
//                   formik.setFieldValue(
//                     "joiningDate",
//                     date[0]
//                       ? date[0].toISOString().split("T")[0]
//                       : ""
//                   );
//                 }}
//                 onClose={() =>
//                   formik.setFieldTouched("joiningDate", true)
//                 }
//                 className={`form-control bg-light rounded-3 py-3 border ${errorClass(
//                   "joiningDate"
//                 )}`}
//               />

//             {
//                 formik.errors.joiningDate &&
//                   formik.touched.joiningDate && (
//                     <div className="text-success-light custom-feedback">
//                       {formik.errors.joiningDate}
//                     </div>
//                   )
//               }

//           </Form.Group>

//         </Col>

//         {/* Class Assigned */}
//         <Col md={4}>

//           {/* <Form.Group>

//             <Form.Label className="text-dark cap-lg-med">
//               Class Assigned
//             </Form.Label>

//             <Form.Control
//               type="text"

//               {...formik.getFieldProps("classAssigned")}
//               isInvalid={
//                 !!formik.errors.classAssigned &&
//                 formik.touched.classAssigned
//               }
//               className={`bg-light rounded-3 py-2 border ${errorClass(
//                 "classAssigned"
//               )}`}
//             />

//             <Form.Control.Feedback
//               type="invalid"
//               className="text-success-light custom-feedback"
//             >
//               {formik.errors.classAssigned}
//             </Form.Control.Feedback>

//           </Form.Group> */}
//           <Form.Group>
//             <Form.Label className="text-dark cap-lg-med">
//               Class Assigned
//             </Form.Label>

//             <Form.Select
//               {...formik.getFieldProps("classAssigned")}
//               isInvalid={
//                 !!formik.errors.classAssigned &&
//                 formik.touched.classAssigned
//               }
//               className={`bg-light rounded-3 py-2 border ${errorClass(
//                 "classAssigned"
//               )}`}
//             >
//               <option value="">Select Class</option>

//               {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
//                 <option
//                   key={num}
//                   value={`${num}A-${num}B-${num}C`}
//                 >
//                   {`${num}A-${num}B-${num}C`}
//                 </option>
//               ))}
//             </Form.Select>

//             <Form.Control.Feedback
//               type="invalid"
//               className="text-success-light custom-feedback"
//             >
//               {formik.errors.classAssigned}
//             </Form.Control.Feedback>
//           </Form.Group>

//         </Col>

//         {/* Work Type */}
//         <Col md={4}>

//           <Form.Group>

//             <Form.Label className="text-dark cap-lg-med">
//               Work Type
//             </Form.Label>

//             <Form.Select
//               {...formik.getFieldProps("workType")}
//               isInvalid={
//                 !!formik.errors.workType &&
//                 formik.touched.workType
//               }
//               className={`bg-light rounded-3 cap-lg-reg py-2 border ${errorClass(
//                 "workType"
//               )}`}
//               style={{
//                 height: "52px",
//                 cursor: "pointer",
//               }}
//             >



//               <option value="Full Time">
//                 Full Time
//               </option>

//               <option value="Part Time">
//                 Part Time
//               </option>
//               <option value="Substitute Teacher">
//                 Substitute
//               </option>

//             </Form.Select>

//             <Form.Control.Feedback
//               type="invalid"
//               className="text-success-light custom-feedback"
//             >
//               {formik.errors.workType}
//             </Form.Control.Feedback>

//           </Form.Group>

//         </Col>

//       </Row>

//     </Card>
//   );
// };

// export default WorkInfo;


"use client";

import React from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

const WorkInfo = ({ formik }) => {
  const errorClass = (fieldName) =>
    formik.errors[fieldName] && formik.touched[fieldName]
      ? "border-success-light"
      : "";

  return (
    <Card className="p-4 shadow-sm border-0 bg-light rounded-4 mb-3">
      <h6 className="text-dark h6-alt mb-3">Work Details</h6>

      <Row className="g-3">
        {/* Joining Date */}
        <Col md={4}>
          <Form.Group>
            <Form.Label className="text-dark cap-lg-med">
              Joining Date
            </Form.Label>
            <Flatpickr
              options={{
                dateFormat: "Y-m-d",
                disableMobile: true,
              }}
              value={formik.values.joiningDate || ""}
              onChange={(selectedDates, dateStr) => {
                formik.setFieldValue("joiningDate", dateStr);
              }}
              onBlur={() =>
                formik.setFieldTouched("joiningDate", true)
              }
              className={`form-control bg-light rounded-3 py-2 border ${errorClass(
                "joiningDate"
              )}`}
            />

            {/* <Flatpickr
              options={{
                dateFormat: "Y-m-d",
                disableMobile:true
              }}
              value={formik.values.joiningDate || ""}
              onChange={(selectedDates) => {
                formik.setFieldValue(
                  "joiningDate",
                  selectedDates?.[0]
                    ? selectedDates[0]
                        .toISOString()
                        .split("T")[0]
                    : ""
                );
              }}
              onBlur={() =>
                formik.setFieldTouched(
                  "joiningDate",
                  true
                )
              }
              className={`form-control bg-light rounded-3 py-2 border ${errorClass(
                "joiningDate"
              )}`}
            /> */}

            {formik.errors.joiningDate &&
              formik.touched.joiningDate && (
                <div className="text-danger small mt-1">
                  {formik.errors.joiningDate}
                </div>
              )}
          </Form.Group>
        </Col>

        {/* Class Assigned */}
        <Col md={4}>
          <Form.Group>
            <Form.Label className="text-dark cap-lg-med">
              Class Assigned
            </Form.Label>

            <Form.Select
              {...formik.getFieldProps("classAssigned")}
              isInvalid={
                !!formik.errors.classAssigned &&
                formik.touched.classAssigned
              }
              className={`bg-light rounded-3 py-2 border ${errorClass(
                "classAssigned"
              )}`}
            >
              <option value="">
                Select Class
              </option>

              {Array.from(
                { length: 12 },
                (_, i) => i + 1
              ).map((num) => (
                <option
                  key={num}
                  value={`Class ${num}`}
                >
                  Class {num}
                </option>
              ))}
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              {formik.errors.classAssigned}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        {/* Work Type */}
        <Col md={4}>
          <Form.Group>
            <Form.Label className="text-dark cap-lg-med">
              Work Type
            </Form.Label>

            <Form.Select
              {...formik.getFieldProps("workType")}
              className={`bg-light rounded-3 py-2 border ${errorClass(
                "workType"
              )}`}
              style={{
                height: "42px",
              }}
            >
              <option value="Full-Time">
                Full Time
              </option>

              <option value="Part-Time">
                Part Time
              </option>

              <option value="Substitute Teacher">
                Substitute Teacher
              </option>

              <option value="Contract">
                Contract
              </option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Card>
  );
};

export default WorkInfo;