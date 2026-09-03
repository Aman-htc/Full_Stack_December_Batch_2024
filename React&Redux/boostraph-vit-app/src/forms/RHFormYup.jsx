import { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner, } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";



const allowedImageTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
const allowedResumeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter your first name"),


  lastname: yup
    .string()
    .required("Please enter your last name"),

  age: yup
    .number()
    .typeError("Age must be a number")
    .min(18, "Age must be greater than 18")
    .max(40, "Age must be less than 40")
    .required("Age is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .max(10, "Maximum 10 characters")
    .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]/, "password must contain at lest one special  characters")
    .matches(/^\S*$/, "Password cannot contain spaces")
    .test("CheckInBetweenSpace", "password can not contain space", (value) => {

      return (!value.includes(' '))
    }),

  phonenumber: yup
    .string()
    .required("Please enter your phone number")
    .matches(/^[6-9]\d{9}$/, "Please enter a valid Indian phone number"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  country: yup.string().required("Please select your country"),
  state: yup.string().required("Please select your state"),

  City: yup
    .array()

    .min(2, "Please select minimum 2 cities")
    .required("Please select your preferred cities"),

  address: yup.string().required("Please enter your address"),

  pincode: yup
    .string()
    .required("Please enter your pin code")
    .length(6, "Pincode must be 6 digits")
    .matches(/^\d+$/, "Pincode must contain only numbers"),

  joiningDate: yup
    .date()
    .required("Joining date is required")
    .typeError("Joining date is required")
    .max(new Date(), "Joining date must be less than today's date"),

  gender: yup.string().required("Please select your gender"),

  hobby: yup
    .array()
    .min(2, "Please select at least 2 hobbies")
    .required()
    .typeError("Please select hobby"),

  file: yup
    .mixed()
    .required("Please select your photo")
    .test("fileType", "Only JPG, PNG, GIF allowed", (value) =>
      value && value.length ? allowedImageTypes.includes(value[0].type) : false
    )
    .test("fileSize", "File must be less than 6MB", (value) =>
      value && value.length ? value[0].size <= 6 * 1024 * 1024 : false
    ),

  resume: yup
    .mixed()
    .required("Please upload your resume")
    .test("fileType", "Only PDF or Word files allowed", (value) =>
      value && value.length ? allowedResumeTypes.includes(value[0].type) : false
    )
    .test("fileSize", "Document must be less than 8MB", (value) =>
      value && value.length ? value[0].size <= 8 * 1024 * 1024 : false
    ),

  termscheck: yup.boolean().oneOf([true], "Please accept terms & conditions"),
});



const RHFormYup = () => {

  const notify = () => toast('The form has been submited successfully')
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm(

    {
      resolver: yupResolver(schema),
      defaultValues: {
        firstname: "aman kushwahah",
        lastname: "kushwahah",
        age: "19",
        password: "iuiu#y",
        phonenumber: "9898767654",
        email: "aman@gmail.com",

        City: ["Gopalganj", "Siwan"],
        hobby: ["Drawing", "Singing"],

        pincode: "989876",
        joiningDate: "2025-12-09",

        gender: "Male",
        country: "india",
        state: "Bihar",
        address: "arna bazar",


      }

    });

  const handleOnSubmit = (data) => {
    setLoading(true);
    
    //     const message = `
    // New Registration Form:

    // Name: ${data.firstname} 
    // Age: ${data.age}
    // Phone: ${data.phonenumber}
    // Email: ${data.email}
    // Country: ${data.country}
    // State: ${data.state}

    // `;

    //     const encodedMessage = encodeURIComponent(message);

    //     const whatsappNumber = "919204823339"

    //     window.open(
    //   `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`,
    //   "_blank"
    // );
    

    setTimeout(() => {
      console.log("Form Submitted", data);
      notify()
      reset({
        firstname: '',
        lastname: '',
        age: '',
        password: '',
        phonenumber: "",
        email: "",
        City: "",
        pincode: "",
        joiningDate: '',
        hobby: '',
        gender: '',
        file: '',
        resume: '',
        country: "",
        state: "",
        address: ""

      })
      setLoading(false);
    }, 3000);

  };

  return (
    <Container>
      <Form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="p-4 bg-white shadow-lg rounded-5 mt-5"
      >
        {/* <Button onClick={notify}> notify</Button> */}
        <ToastContainer />
        <h3>Registration Details</h3>


        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" {...register("firstname")} />
              <div className="text-danger">{errors?.firstname?.message}</div>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" {...register("lastname")} />
              <div className="text-danger">{errors?.lastname?.message}</div>
            </Form.Group>
          </Col>
        </Row>


        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" {...register("age")} />
              <div className="text-danger">{errors?.age?.message}</div>
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" {...register("password")} />
              <div className="text-danger">{errors?.password?.message}</div>
            </Form.Group>
          </Col>
        </Row>


        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" {...register("phonenumber")} />
              <div className="text-danger">{errors?.phonenumber?.message}</div>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" {...register("email")} />
              <div className="text-danger">{errors?.email?.message}</div>
            </Form.Group>
          </Col>
        </Row>


        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Select Country</Form.Label>
              <Form.Select {...register("country")}>
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
              </Form.Select>
              <div className="text-danger">{errors?.country?.message}</div>
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Select State</Form.Label>
              <Form.Select {...register("state")}>
                <option value="">Select State</option>
                <option value="Bihar">Bihar</option>
                <option value="UP">UP</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Delhi">Delhi</option>
              </Form.Select>
              <div className="text-danger">{errors?.state?.message}</div>
            </Form.Group>
          </Col>
        </Row>


        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Select Preferred Cities (Min 2)</Form.Label>
              <Form.Select multiple {...register("City")}>
                <option value="Gopalganj">Gopalganj</option>
                <option value="Siwan">Siwan</option>
                <option value="Mirganj">Mirganj</option>
                <option value="Chapra">Chapra</option>
              </Form.Select>
              <div className="text-danger">{errors?.City?.message}</div>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Complete Address</Form.Label>
              <Form.Control as="textarea" {...register("address")} />
              <div className="text-danger">{errors?.address?.message}</div>
            </Form.Group>
          </Col>
        </Row>


        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="text" {...register("pincode")} />
              <div className="text-danger">{errors?.pincode?.message}</div>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control type="date" {...register("joiningDate")} />
              <div className="text-danger">{errors?.joiningDate?.message}</div>
            </Form.Group>
          </Col>
        </Row>



        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <br />
              {["Male", "Female", "Transgender"].map((g, i) => (
                <Form.Check
                  key={i}
                  inline
                  label={g}
                  value={g}
                  type="radio"
                  {...register("gender")}
                />
              ))}
              <div className="text-danger">{errors?.gender?.message}</div>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Hobbies (Select minimum 2)</Form.Label>
              <br />
              {["Drawing", "Singing", "Dancing"].map((h, i) => (
                <Form.Check
                  key={i}
                  inline
                  label={h}
                  value={h}
                  type="checkbox"
                  {...register("hobby")}
                />
              ))}
              <div className="text-danger">{errors?.hobby?.message}</div>
            </Form.Group>
          </Col>
        </Row>


        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" {...register("file")} />
              <div className="text-danger">{errors?.file?.message}</div>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Resume</Form.Label>
              <Form.Control type="file" {...register("resume")} />
              <div className="text-danger">{errors?.resume?.message}</div>
            </Form.Group>
          </Col>
        </Row>


        <Form.Group className="mb-5">
          <Form.Check
            type="checkbox"
            label="Agree to terms and conditions"
            {...register("termscheck")}
          />
          <div className="text-danger">{errors?.termscheck?.message}</div>
        </Form.Group>

        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <Spinner animation="border" size="sm" /> Processing...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default RHFormYup;
