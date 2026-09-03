import { Breadcrumb, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Tooltip from 'react-bootstrap/Tooltip';

function PopoverPositionedExample() {
    return (
        <>

        <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Layout
        </Breadcrumb.Item>
        <Breadcrumb.Item >Interactive Component </Breadcrumb.Item>
        <Breadcrumb.Item active >Overlays </Breadcrumb.Item>
      </Breadcrumb>


            <Row >
                <Col lg={12} >
                <h2 className='text-primary mb-3'>Overlays</h2>
                    {['top', 'right', 'bottom', 'left'].map((placement) => (
                        <OverlayTrigger
                            trigger="click"
                            key={placement}
                            placement={placement}
                            overlay={
                                <Popover id={`popover-positioned-${placement}`}>
                                    <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
                                    <Popover.Body>
                                        <strong>Holy guacamole!</strong> Check this info.
                                    </Popover.Body>
                                </Popover>

                            }

                        >
                            <Button variant="outline-secondary me-4 mt-5">Popover on {placement}</Button>
                        </OverlayTrigger>
                    ))}
                </Col>
                <hr  className='mb-2 mt-5'/>
                <Col lg={12} className='mt-5'>
                <h2 className='text-primary mb-5'>Tooltip</h2>


                    {['top', 'right', 'bottom', 'left'].map((placement) => (
                        <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                                <Tooltip id={`tooltip-${placement}`}>
                                    Tooltip on <strong>{placement}</strong>.
                                </Tooltip>
                            }
                        >
                            <Button variant="secondary me-4"  >Tooltip on {placement}</Button>
                        </OverlayTrigger>
                    ))}
                </Col>
            </Row>
        </>
    );
}

export default PopoverPositionedExample;