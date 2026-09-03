
import { Breadcrumb, Col, Row } from 'react-bootstrap';
import { Bell, BoxArrowDownRight, BoxArrowRight, Gear, Person, Speedometer2 } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';


function RBDropdowns() {



    const DropdownText = [
        {
            id: 1,
            text: ' Dashboard',
            icon: <Speedometer2 />


        },

        {
            id: 2,
            text: ' Notification',
            icon: <Bell />


        },

        {
            id: 3,
            text: 'Setting',
            icon: <Gear />


        },

        {
            id: 4,
            text: '   Logout',
            icon: <BoxArrowRight />


        }
        

    ]




    return (
        <div>


            <Breadcrumb className="mb-5">

                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Layout
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Interactive Components
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Dropdown</Breadcrumb.Item>
                
            </Breadcrumb>
            <hr />



            <h3 className=' text-primary '>Dropdowns</h3>
            <Row className='mt-5'>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            <Person /> Profile
                    </Dropdown.Toggle>

                        


                        <Dropdown.Menu>
                            {DropdownText.map((text, index) => {
                                return (
                                    <Dropdown.Item key={index} href="#/action-1"> {text.icon} {text.text}</Dropdown.Item>
                                )
                            })}

                        </Dropdown.Menu>


                    </Dropdown>




                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            <Person /> Profile
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {DropdownText.map((text, index) => {
                                return (
                                    <Dropdown.Item key={index} href="#/action-1"> {text.icon} {text.text}</Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>




                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle className='border-0 p-0' bsPrefix=' ' id="dropdown-basic">
                            <Image src='https://thumbs.dreamstime.com/b/intelligent-boy-avatar-glasses-flat-style-isolated-white-background-black-hair-round-ideal-educational-apps-392811046.jpg' style={{ width: '50px' }}></Image>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                             {DropdownText.map((text, index) => {
                                return (
                                    <Dropdown.Item key={index} href="#/action-1"> {text.icon} {text.text}</Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>




                </Col>


            </Row>



        </div>
    )
}

export default RBDropdowns
