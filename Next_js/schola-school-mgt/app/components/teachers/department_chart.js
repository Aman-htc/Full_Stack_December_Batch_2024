"use client";

import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { departmentDistribution } from "@/app/data";
import { Button, Card, Dropdown, Modal, Form } from "react-bootstrap";
import { FiMoreHorizontal } from "react-icons/fi";
import { LucideFileEdit } from "lucide-react";
import { toast } from "react-toastify";
import { addDepartment } from "@/services/teacherService";
// import { useEffect, useState } from "react";
import { getDepartmentChart } from "@/services/teacherService";


const COLORS = [
  "#0B3A66",
  "#CEEAF1",
  "#FFCDFD",
  "#FCEBFC",
  "#B1B4B3",
  "#DBDEDD",
];

export default function DepartmentChart() {
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [departmentName, setDepartmentName] = useState("");
  const [loading, setLoading] = useState(false);

  const [departmentData, setDepartmentData] = useState([]);



  const total = departmentData.reduce(
    (sum, d) => sum + d.teachers,
    0
  );

  //  OPEN ADD MODAL
  const handleAdd = () => {
    setEditData(null);
    setDepartmentName("");
    setShowModal(true);
  };

  // OPEN EDIT MODAL
  const handleEdit = (item) => {
    setEditData(item);
    setDepartmentName(item.department);
    setShowModal(true);
  };

  // SAVE (ADD / UPDATE)
  const handleSave = async () => {
    try {
      if (!departmentName.trim()) {
        toast.error("Department name required");
        return;
      }

      setLoading(true);

      const payload = {
        department_name: departmentName.trim(),
      };

      if (editData) {
        // Update API future me add kar sakte hain
        console.log("UPDATE =>", payload);

        toast.success("Department updated successfully");
      } else {
        const response = await addDepartment(payload);

        console.log("Department Added =>", response);

        toast.success("Department added successfully");
      }

      setShowModal(false);
      setDepartmentName("");
      setEditData(null);
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.detail ||
        error?.response?.data?.message ||
        "Failed to save department"
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchDepartmentData = async () => {
    try {
      const response = await getDepartmentChart();
      

      const formattedData = response.data.map((item) => ({
        department: item.department_name,
        teachers: item.teacher_count,
        percentage: item.percentage,
      }));

      setDepartmentData(formattedData);
      
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch department data");
    }
  };

  useEffect(() => {
    fetchDepartmentData();
  }, []);





  return (
    <>
      <Card className="border-0 bg-light h-100 shadow-sm rounded-4 p-3">

        {/* HEADER */}
        <div className="d-flex justify-content-between text-danger-subtle h6-alt align-items-center mb-2">
          <h5 className="fw-semibold text-danger-subtle ">
            Department
          </h5>
          <span className="text-danger ">
            <Dropdown align="end" className="action-dropdown">

              <Dropdown.Toggle
                variant="light"
                bsPrefix="p-0"
                className="action-toggle   d-flex align-items-center justify-content-center"
                id="dropdown-icon"
              >
                <FiMoreHorizontal className="text-muted" size={18} />
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="shadow border-0 rounded-3 py-1 action-menu"
              >
                <Dropdown.Item
                  onClick={handleAdd}
                  className="small px-3 py-2"
                >
                  add department
                </Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown>

          </span>
        </div>

        {/* CHART AREA */}
        <div style={{ position: "relative", height: 220 }}>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>

              <Pie
                data={departmentData}
                dataKey="teachers"


                cx="50%"
                cy="75%"
                startAngle={180}
                endAngle={0}
                innerRadius={80}
                outerRadius={110}
                paddingAngle={3}
                stroke="none"
              >
                {departmentData.map((_, i) => (
                  <Cell
                    key={i}
                    fill={COLORS[i % COLORS.length]}
                  />
                ))}
              </Pie>

            </PieChart>
          </ResponsiveContainer>

          {/* CENTER TEXT */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "62%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <div className="text-danger cap-lg-med mt-8 ">
              Total Teachers
            </div>
            <div
              className="text-danger-subtle h3 "
            >
              {total}
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <hr className="my-3" />

        {/* LEGEND */}
        <div>

          {departmentData.map((item, i) => (
            <div
              key={i}
              className="d-flex justify-content-between align-items-center py-1"
            >

              {/* LEFT SIDE */}
              <div className="d-flex align-items-center gap-2">

                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 2,
                    backgroundColor:
                      COLORS[i % COLORS.length],
                    display: "inline-block",
                  }}
                />

                <span className="text-danger body-sm  ">
                  {item.department}
                </span>

              </div>

              {/* RIGHT SIDE */}
              <div className="d-flex align-items-center gap-3">

                <span className=" text-danger  body-sm " >
                  {item.teachers}
                </span>

                <span

                  className="text-danger-subtle text-body-xs-bold"
                >
                  {item.percentage}%
                </span>
                <Button

                  className="sm p-0 bg-light border-0"
                  onClick={() => handleEdit(item)}
                >
                  <LucideFileEdit size={10} />
                </Button>

              </div>

            </div>
          ))}

        </div>

      </Card>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        {/* HEADER */}
        <Modal.Header
          closeButton
          className="bg-primary text-white border-0"
        >
          <Modal.Title className="fw-semibold text-dark">
            {editData ? " Edit Department" : " Add Department"}
          </Modal.Title>
        </Modal.Header>

        {/* BODY */}
        <Modal.Body className="p-4 bg-light">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold text-dark">
                Department Name
              </Form.Label>

              <Form.Control
                type="text"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
                placeholder="Enter department name..."
                className="py-2 px-3 rounded-3 shadow-sm border-0"
                autoFocus
              />

              <small className="text-muted">
                Example: Science, Mathematics, English
              </small>
            </Form.Group>
          </Form>
        </Modal.Body>

        {/* FOOTER */}
        <Modal.Footer className="bg-white border-0 d-flex justify-content-between">

          <Button
            variant="outline-secondary"
            onClick={() => setShowModal(false)}
            className="px-4 rounded-3"
          >
            Cancel
          </Button>

          <Button
            onClick={handleSave}
            className={`px-4 rounded-3 shadow-sm ${editData ? "btn-warning" : "btn-success"
              }`}
          >
            {editData ? "Update Department" : "Save Department"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// "use client";

// import React, { useState } from "react";
// import {
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// import { departmentDistribution } from "@/app/data";
// import { Card, Dropdown, Modal, Button, Form } from "react-bootstrap";
// import { FiMoreHorizontal } from "react-icons/fi";
// import { LucideFileEdit } from "lucide-react";

// const COLORS = [
//   "#0B3A66",
//   "#CEEAF1",
//   "#FFCDFD",
//   "#FCEBFC",
//   "#B1B4B3",
//   "#DBDEDD",
// ];

// export default function DepartmentChart() {
//   const [showModal, setShowModal] = useState(false);
//   const [editData, setEditData] = useState(null);
//   const [departmentName, setDepartmentName] = useState("");

//   const total = departmentDistribution.reduce(
//     (sum, d) => sum + d.teachers,
//     0
//   );

//   //  OPEN ADD MODAL
//   const handleAdd = () => {
//     setEditData(null);
//     setDepartmentName("");
//     setShowModal(true);
//   };

//   // OPEN EDIT MODAL
//   const handleEdit = (item) => {
//     setEditData(item);
//     setDepartmentName(item.department);
//     setShowModal(true);
//   };

//   // SAVE (ADD / UPDATE)
//   const handleSave = () => {
//     if (!departmentName) {
//       alert("Department name required");
//       return;
//     }

//     if (editData) {
//       console.log("UPDATE =>", {
//         ...editData,
//         department: departmentName,
//       });
//     } else {
//       console.log("ADD =>", {
//         department: departmentName,
//       });
//     }

//     setShowModal(false);
//     setDepartmentName("");
//     setEditData(null);
//   };

//   return (
//     <>
//       <Card className="border-0 bg-light h-100 shadow-sm rounded-4 p-3">

//         {/* HEADER */}
//         <div className="d-flex justify-content-between align-items-center mb-2">
//           <h5 className="fw-semibold text-danger-subtle">
//             Department
//           </h5>

//           <Dropdown align="end">
//             <Dropdown.Toggle
//               variant="light"
//               bsPrefix="p-0"
//               className="d-flex align-items-center justify-content-center"
//             >
//               <FiMoreHorizontal className="text-muted" size={18} />
//             </Dropdown.Toggle>

//             <Dropdown.Menu className="shadow border-0 rounded-3 py-1">
//               <Dropdown.Item onClick={handleAdd}>
//                 Add Department
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>

//         {/* CHART */}
//         <div style={{ position: "relative", height: 220 }}>
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={departmentDistribution}
//                 dataKey="teachers"
//                 cx="50%"
//                 cy="75%"
//                 startAngle={180}
//                 endAngle={0}
//                 innerRadius={80}
//                 outerRadius={110}
//                 paddingAngle={3}
//                 stroke="none"
//               >
//                 {departmentDistribution.map((_, i) => (
//                   <Cell
//                     key={i}
//                     fill={COLORS[i % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>

//           {/* CENTER TEXT */}
//           <div
//             style={{
//               position: "absolute",
//               left: "50%",
//               top: "62%",
//               transform: "translate(-50%, -50%)",
//               textAlign: "center",
//             }}
//           >
//             <div className="text-danger cap-lg-med">
//               Total Teachers
//             </div>
//             <div className="text-danger-subtle h3">
//               {total}
//             </div>
//           </div>
//         </div>

//         <hr className="my-3" />

//         {/* LEGEND */}
//         <div>
//           {departmentDistribution.map((item, i) => (
//             <div
//               key={item.id}
//               className="d-flex justify-content-between align-items-center py-1"
//             >
//               {/* LEFT */}
//               <div className="d-flex align-items-center gap-2">
//                 <span
//                   style={{
//                     width: 10,
//                     height: 10,
//                     borderRadius: 2,
//                     backgroundColor: COLORS[i % COLORS.length],
//                   }}
//                 />

//                 <span className="text-danger body-sm">
//                   {item.department}
//                 </span>
//               </div>

//               {/* RIGHT */}
//               <div className="d-flex align-items-center gap-3">
//                 <span className="text-danger body-sm">
//                   {item.teachers}
//                 </span>

//                 <span className="text-danger-subtle text-body-xs-bold">
//                   {item.percentage}%
//                 </span>

//                 {/* EDIT BUTTON */}
//                 <Button

//                   className="sm p-0 bg-light border-0"
//                   onClick={() => handleEdit(item)}
//                 >
//                   <LucideFileEdit size={10} />
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Card>

//       {/* MODAL (ADD + EDIT) */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {editData ? "Edit Department" : "Add Department"}
//           </Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <Form>
//             <Form.Group>
//               <Form.Label>Department Name</Form.Label>

//               <Form.Control
//                 type="text"
//                 value={departmentName}
//                 onChange={(e) => setDepartmentName(e.target.value)}
//                 placeholder="Enter department name"
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button
//             variant="secondary"
//             onClick={() => setShowModal(false)}
//           >
//             Cancel
//           </Button>

//           <Button variant="primary" onClick={handleSave}>
//             {editData ? "Update" : "Save"}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

