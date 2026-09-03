// "use client";
// import React from "react";
// import { Form, Card } from "react-bootstrap";

// const AdditionalInfo = ({ formik }) => {

//   const errorClass = (fieldName) =>
//     formik.errors[fieldName] &&
//     formik.touched[fieldName]
//       ? "border-success-light"
//       : "";

//   return (

//     <Card className="p-4 shadow-sm border-0 mb-3 rounded-4 bg-light">

//       <h6 className="text-dark h6-alt mb-4">
//         Additional Information
//       </h6>

//       {/* Skills */}
//       <Form.Group className="mb-4">

//         <Form.Label className="text-dark cap-lg-med">
//           Skills
//         </Form.Label>

//         <Form.Control
//           type="text"

//           {...formik.getFieldProps("skills")}
//           isInvalid={
//             !!formik.errors.skills &&
//             formik.touched.skills
//           }
//           className={`bg-light rounded-3 py-2 border ${errorClass(
//             "skills"
//           )}`}
//         />

//         <Form.Control.Feedback
//           type="invalid"
//           className="text-success-light custom-feedback"
//         >
//           {formik.errors.skills}
//         </Form.Control.Feedback>

//       </Form.Group> 


//       {/* <Form.Group>

//         <Form.Label className="text-dark cap-lg-med">
//           Notes
//         </Form.Label>

//         <Form.Control
//           as="textarea"
//           rows={4}
//           placeholder="Write additional notes..."
//           {...formik.getFieldProps("notes")}
//           isInvalid={
//             !!formik.errors.notes &&
//             formik.touched.notes
//           }
//           className={`bg-light rounded-3 border py-2 ${errorClass(
//             "notes"
//           )}`}
//         />

//         <Form.Control.Feedback
//           type="invalid"
//           className="text-success-light custom-feedback"
//         >
//           {formik.errors.notes}
//         </Form.Control.Feedback>

//       </Form.Group> */} 

//     </Card>
//   );
// };

// export default AdditionalInfo;

"use client";
import React from "react";
import { Form, Card } from "react-bootstrap";

const AdditionalInfo = ({ formik }) => {

  const errorClass = (fieldName) =>
    formik.errors[fieldName] && formik.touched[fieldName]
      ? "border-success-light"
      : "";

  return (
    <Card className="p-4 shadow-sm border-0 mb-3 rounded-4 bg-light">

      <h6 className="text-dark h6-alt mb-4">
        Additional Information
      </h6>

      {/* Skills */}
      <Form.Group className="mb-4">

        <Form.Label className="text-dark cap-lg-med">
          Skills
        </Form.Label>

        <Form.Control
          type="text"
          {...formik.getFieldProps("skills")}
          isInvalid={
            !!formik.errors.skills &&
            formik.touched.skills
          }
          className={`bg-light rounded-3 py-2 border ${errorClass(
            "skills"
          )}`}
        />

        <Form.Control.Feedback
          type="invalid"
          className="text-success-light custom-feedback"
        >
          {formik.errors.skills}
        </Form.Control.Feedback>

      </Form.Group>

      {/* Extra Duty */}
      {/* <Form.Group>
        <Form.Label className="text-dark cap-lg-med">
          Extra Duty Hours
        </Form.Label>

        <Form.Control
          type="number"
          min="0"
          placeholder="Enter hours"
          {...formik.getFieldProps("extraDuties")}
          isInvalid={
            formik.touched.extraDuties &&
            !!formik.errors.extraDuties
          }
        />

        <Form.Control.Feedback
          type="invalid"
          className="text-success-light custom-feedback"
        >
          {formik.errors.extraDuties}
        </Form.Control.Feedback>
      </Form.Group> */}
    </Card>
  );
};

export default AdditionalInfo;