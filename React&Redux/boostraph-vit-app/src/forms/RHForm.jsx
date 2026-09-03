import { useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const RHForm = () => {
    const { formState: { errors }, register, handleSubmit } = useForm();
      const [loading, setLoading] = useState(false);
    const handleOnSubmit = (data) => {
        setLoading(true);
        console.log(data)

    
    setTimeout(() => {
      console.log("Form Submitted", data);
      setLoading(false);
    }, 3000) };
   

 
    return (
        <Container>

            <Form onSubmit={handleSubmit(handleOnSubmit)} className='p-4 bg-white shadow-lg rounded-5 mt-5'>

                <h3>Regitration Details</h3>
                <Row>
                    <Col>

                        <Form.Group className="mb-3" controlId="firstname">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" {...register("firstname", {
                                required: "Please enter your fast name",
                                minLength: {
                                    value: 3, message: "you can use minimam 3 character"
                                },

                                validate: (value) => {
                                    return (!value.includes(" ") || " cannot contain spaces")
                                }

                            })} />
                            <div className="text-danger">{errors?.firstname?.message}</div>
                        </Form.Group>
                    </Col>
                    <Col >

                        <Form.Group className="mb-3" controlId="lastname">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" {...register("lastname", {
                                required: "Please enter your last name",
                                minLength: {
                                    value: 3, message: "you can use minimam 3 character"
                                },

                                validate: (value) => {
                                    return (!value.includes(" ") || " last name cannot contain spaces")
                                }
                            })} />
                            <div className="text-danger">{errors?.lastname?.message}</div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>

                        <Form.Group className="mb-3" controlId="phonenumber">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number"
                                {...register("age",
                                    {
                                        required: "The age is required.",
                                        min: {
                                            value: 18, message: "Age must be greater than 18",
                                        },
                                        max: {
                                            value: 40, message: "Age must be less than 40",
                                        }
                                    })
                                } />
                            <div className="text-danger">{errors?.age?.message}</div>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>

                        <Form.Group className="mb-3" controlId="emailaddress">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                {...register("password",
                                    {
                                        required: "The password is required.",
                                        minLength: {
                                            value: 6, message: "Password must be greater than 6"
                                        },
                                        maxLength: { value: 10, message: "You can use maximum 10 character for password" },
                                        validate: (value) => {
                                            return (!value.includes(" ") || "Password cannot contain spaces")
                                        }

                                    })
                                } />
                            <div className="text-danger">{errors?.password?.message}</div>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="phonenumber">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("phonenumber", {
                                    required: "Please enter your phone number",
                                    pattern: {
                                        value: /^[6-9]\d{9}$/,
                                        message: "Please enter a valid Indian phone number"
                                    }
                                })}
                            />

                            <div className="text-danger">{errors?.phonenumber?.message}</div>

                        </Form.Group>


                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="emailaddress">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                {...register("email",
                                    {
                                        required: "The email is required.",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Please enter a valid email address",
                                        }
                                    })
                                } />
                            <div className="text-danger">{errors?.email?.message}</div>
                        </Form.Group>


                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>

                        <Form.Group className="mb-3" controlId="country">
                            <Form.Label>Select Country</Form.Label>

                            <Form.Select
                                {...register("country", {
                                    required: "Please select your country"
                                })}
                            >
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

                        <Form.Group className="mb-3" controlId="state">
                            <Form.Label>Select State</Form.Label>

                            <Form.Select
                                {...register("state",
                                    {
                                        required: "Please select your country"
                                    })}
                            >
                                <option value="">Select state</option>
                                <option value="Bihar">Bihar</option>
                                <option value="up">UP</option>
                                <option value="jharkhand">Jharkhand</option>
                                <option value="Delhi">Delhi</option>
                            </Form.Select>


                            <div className="text-danger">{errors?.state?.message}</div>
                        </Form.Group>

                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="City">
                            <Form.Label>Select preferred Cities</Form.Label>

                            <Form.Select
                                multiple
                                {...register("City", {
                                    required: "Please select at least 2 cities",
                                    validate: (value) =>
                                        value.length >= 2 || "Please select minimum 2 cities"
                                })}
                            >
                                <option value="Gopalganj">Gopalganj</option>
                                <option value="siwan">Siwan</option>
                                <option value="mirganj">Mirganj</option>
                                <option value="chapra">Chapra</option>
                            </Form.Select>

                            <div className="text-danger">{errors?.City?.message}</div>

                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Select Complites Address</Form.Label>

                            <Form.Control
                                as={'textarea'}
                                {...register("address", {
                                    required: "Please select your address"
                                })}
                            />



                            <div className="text-danger">{errors?.address?.message}</div>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="pincode">
                            <Form.Label>Pin code</Form.Label>

                            <Form.Control
                                type='number'
                                {...register("pincode", {
                                    required: "Please enter your pin code",
                                    minLength: {
                                        value: 6, message: "pin code must be greater than 6"
                                    },
                                    maxLength: { value: 6, message: "You can use maximum 6 character for password" },
                                    validate: (value) => {
                                        return (!value.includes(" ") || "pin code cannot contain spaces")
                                    }


                                })}
                            />



                            <div className="text-danger">{errors?.pincode?.message}</div>
                        </Form.Group>



                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="joiningDate">
                            <Form.Label>Joining Date</Form.Label>

                            <Form.Control type="Date"
                                {...register("joiningDate",
                                    {
                                        required: "Joining date is required.",
                                        validate: (value) => {
                                            const today = new Date();
                                            const selectedDate = new Date(value);
                                            return (selectedDate < today || "Joining date must be less than today's date");
                                        },
                                    })
                                } />
                            <div className="text-danger">{errors?.joiningDate?.message}</div>
                        </Form.Group>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <br />

                            {["Male", "Female", "Transgender"].map((gender, index) => {
                                return (
                                    <Form.Check
                                        key={index}
                                        inline
                                        label={gender}
                                        id={gender}
                                        type="radio"
                                        value={gender}
                                        {...register("gender", {
                                            required: "Please select your gender",
                                        })}
                                    />
                                )
                            })}
                            <div className="text-danger">{errors?.gender?.message}</div>
                        </Form.Group>



                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="hobby">
                            <Form.Label>Hobbies</Form.Label>
                            <br />

                            {["Drawing", "Singing", "Dancing"].map((hobby, index) => (
                                <Form.Check
                                    key={index}
                                    inline
                                    label={hobby}
                                    value={hobby}
                                    type="checkbox"
                                    {...register("hobby", {
                                        required: "please select hobby",
                                        validate: (value) =>
                                            value.length >= 2 || "Please select at least 2 hobbies"
                                    })}
                                />
                            ))}


                            <div className="text-danger">{errors?.hobby?.message}</div>
                        </Form.Group>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className='mb-3' controlId='file'>
                            <Form.Label> Profile Picture</Form.Label>
                            <Form.Control
                                type="file"
                                accept=".jpg,.jpeg,.png,.gif"
                                {...register("file", {
                                    required: "Please select your photo",
                                    validate: {
                                        fileType: (value) => {
                                            if (!value || value.length === 0) return true;
                                            const file = value[0];
                                            const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
                                            return (
                                                allowedTypes.includes(file.type) ||
                                                "Only JPG, PNG, or GIF files are allowed"
                                            );
                                        },
                                        fileSize: (value) => {
                                            if (!value || value.length === 0) return true;
                                            const file = value[0];
                                            const maxSize = 6 * 1024 * 1024; // 6 MB
                                            return (
                                                file.size <= maxSize ||
                                                "File size must be less than 6MB"
                                            );
                                        }
                                    }
                                })}
                            />

                            <div className="text-danger">{errors?.file?.message}</div>

                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className='mb-3'>
                            <Form.Label> Resume</Form.Label>
                            <Form.Control
                                type="file"
                                accept=".pdf,.doc,.docx"
                                {...register("resume", {
                                    required: "Please upload your resume",
                                    validate: {
                                        fileType: (value) => {
                                            if (!value || value.length === 0) return true;

                                            const file = value[0];

                                            const allowedTypes = [
                                                "application/pdf",
                                                "application/msword",
                                                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                            ];

                                            return (
                                                allowedTypes.includes(file.type) ||
                                                "Only PDF or Word documents are allowed"
                                            );
                                        },
                                        fileSize: (value) => {
                                            if (!value || value.length === 0) return true;

                                            const file = value[0];
                                            const maxSize = 8 * 1024 * 1024; // 8MB

                                            return (
                                                file.size <= maxSize ||
                                                " document size must be less than 8MB"
                                            );
                                        }
                                    }
                                })}
                            />

                            <div className="text-danger">{errors?.resume?.message}</div>


                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className='mb-5' controlId='termscheck'>
                    <Form.Check type='checkbox' label="Agree to terms and conditions"  {...register("termscheck", { required: "please select terms conditions" })} />
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
export default RHForm