


import { useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import { HiOutlineCamera } from "react-icons/hi";

// Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// API
import { updateTeacherPhoto } from "../../../services/teacherService";

export default function UpdateProfile({ teacher }) {
  
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log('update data texher',teacher)

  const uploadImage = async (file) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "profile_images");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dyqtrk0rd/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!data.secure_url) {
      throw new Error("Image upload failed");
    }

    return data.secure_url;
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select image");
      return;
    }

    try {
      setLoading(true);

      // Upload to Cloudinary
      const imageUrl = await uploadImage(file);

      

      // Save URL in database
      await updateTeacherPhoto(
        teacher?.data?.TeacherID,
        imageUrl
      );

      toast.success("Photo updated successfully");

      setShow(false);
      setFile(null);
    } catch (error) {
      console.log("Upload Error:", error);
      toast.error("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Profile Box */}
      <div
        className="mx-auto mb-4 rounded-5 shadow-sm"
        style={{ width: "100px", height: "100px", cursor: "pointer" }}
        onClick={() => setShow(true)}
      >
        <Image
          src={
            teacher?.data?.ProfilePhoto ||
            "https://www.shutterstock.com/image-photo/satisfied-success-profile-head-shot-260nw-2689295561.jpg"
          }
          width={100}
          height={100}
          className="w-100 h-100 rounded-5 object-fit-cover"
        />
      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        contentClassName="border-0 rounded-4 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-secondary text-white text-center py-4 position-relative">
          <div
            className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{ width: "80px", height: "80px" }}
          >
            <HiOutlineCamera size={35} className="text-dark" />
          </div>

          <h5 className="mb-1 h6-alt">Update Profile Photo</h5>

          <p className="mb-0 small text-light opacity-75">
            Upload a new profile picture
          </p>
        </div>

        {/* Body */}
        <Modal.Body className="p-4">
          <Form.Group>
            <Form.Label className="fw-medium mb-2">
              Choose Image
            </Form.Label>

            <Form.Control
              type="file"
              accept="image/*"
              className="rounded-3 py-2"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>
        </Modal.Body>

        {/* Footer */}
        <Modal.Footer className="border-0 px-4 pb-4 pt-0">
          <Button
            variant="light"
            className="rounded-pill px-4"
            onClick={() => setShow(false)}
          >
            Cancel
          </Button>

          <Button
            variant="dark"
            className="rounded-pill text-light px-4"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}