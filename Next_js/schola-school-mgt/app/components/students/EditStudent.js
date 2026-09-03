import AddStudentPage from "@/app/(dashboard)/students/add/page";
import { Modal,  } from "react-bootstrap";
import { FiEdit3 } from "react-icons/fi";

export default function StudentEditModal({
  show,
  onHide,
  student,

  onSuccess,
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="xl"
      centered
      scrollable
      backdrop="static"
      dialogClassName="student-edit-modal"
    >
      {/* Header */}
      <Modal.Header
        closeButton
        className="border-0 pb-0 px-4 pt-4"
      >
        <div className="w-100">
          <div className="d-flex align-items-center gap-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                background: "#fff3cd",
              }}
            >
              <FiEdit3 size={22} className="text-warning" />
            </div>

            <div>
              <h4 className="mb-1 fw-bold">
                Edit Student Information
              </h4>

              <p className="mb-0 text-muted small">
                Update student details, guardian information,
                academic records and profile information.
              </p>
            </div>
          </div>
        </div>
      </Modal.Header>

      {/* Divider */}
      <div className="border-bottom mt-3"></div>

      {/* Body */}
      <Modal.Body
        className="bg-light"
        style={{
          maxHeight: "75vh",
          overflowY: "auto",
        }}
      >
        <div
          className="bg-white rounded-4 shadow-sm p-3"
        >
          <AddStudentPage
            initialData={student}
            isEdit={true}
            onSuccess={onSuccess}

          />
        </div>
      </Modal.Body>

      
    </Modal>
  );
}