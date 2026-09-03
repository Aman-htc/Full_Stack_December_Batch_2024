import { Breadcrumb } from 'react-bootstrap';
import { CalendarMinus, Clock, CurrencyRupee } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Tabss() {
  return (
    <>


      <Breadcrumb className="mb-5">

        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Layout
        </Breadcrumb.Item>

        <Breadcrumb.Item >Interactive Component</Breadcrumb.Item>
        <Breadcrumb.Item >Nav Tabs</Breadcrumb.Item>
      </Breadcrumb>




      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={12}>
            <Nav variant="underline " className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="first">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Project Scope</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="three">Team Members</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="four">Tasks</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="five">Chat</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <hr />

          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div
                  class="container-fluid"
                >
                  <Row>
                    <Col sm={12}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In explicabo nisi illum temporibus quidem aliquam.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In explicabo nisi illum temporibus quidem aliquam.
                    </Col>
                    <hr className='mt-5' />
                    <Col sm={6}>
                      <h6><CalendarMinus color='blue' className='me-2' />  Start Date</h6>

                    </Col>

                    <Col sm={6}>
                      <p className='text-right'>01 jun 2024</p>

                    </Col>
                    <hr />
                    <Col sm={6}>
                      <h6>  <CalendarMinus color='blue' className='me-2' /> End Date</h6>

                    </Col>

                    <Col sm={6}>
                      <p className='text-right'>31 dec, 2025</p>

                    </Col>
                    <hr />
                    <Col sm={6}>
                      <h6> <Clock color='blue' className='me-2' />Etimate Time</h6>

                    </Col>

                    <Col sm={6}>
                      <p className='text-right'>5 Months</p>

                    </Col>
                    <hr />
                    <Col sm={6}>
                      <h6> <CurrencyRupee color='blue' className='me-2' />    Etimate cost</h6>

                    </Col>


                    <Col sm={6}>

                      <p className='text-right'><CurrencyRupee /> 5,80,000</p>

                    </Col>

                  </Row>
                </div>


              </Tab.Pane>

              <Tab.Pane eventKey="second">
                <div
                  class="container-fluid"
                >



                  <Row>
                    <Col sm={12}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In explicabo nisi illum temporibus quidem aliquam.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      In explicabo nisi illum temporibus quidem aliquam.
                    </Col>
                    <hr className='mt-5' />
                    <Col sm={6}>
                      <h6><CalendarMinus color='blue' className='me-2' />  Start Date</h6>

                    </Col>

                    <Col sm={6}>
                      <p className='text-right'>01 jun 2024</p>

                    </Col>
                    <hr />
                    <Col sm={6}>
                      <h6>  <CalendarMinus color='blue' className='me-2' /> End Date</h6>

                    </Col>

                    <Col sm={6}>
                      <p className='text-right'>31 dec, 2025</p>

                    </Col>
                    <hr />
                    <Col sm={6}>
                      <h6> <Clock color='blue' className='me-2' />Etimate Time</h6>

                    </Col>

                    <Col sm={6}>
                      <p className='text-right'>5 Months</p>

                    </Col>
                    <hr />
                    <Col sm={6}>
                      <h6> <CurrencyRupee color='blue' className='me-2' />    Etimate cost</h6>

                    </Col>


                    <Col sm={6}>

                      <p className='text-right'><CurrencyRupee className='me-2' />   5,80,000</p>

                    </Col>

                  </Row>
                </div>

              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

export default Tabss;
