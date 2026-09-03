import { useState } from 'react';
import { Breadcrumb, Button, ButtonGroup } from 'react-bootstrap';
import { Justify, JustifyLeft, JustifyRight } from 'react-bootstrap-icons';

function RBButtonGroups() {
  const [align, setAlign] = useState("");

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Layout
        </Breadcrumb.Item>
        <Breadcrumb.Item active> Group Button</Breadcrumb.Item>
      </Breadcrumb>


      < div className='mt-5  shadow-lg bg-white rounded-5 p-5'>
        <h3 className='text-primary'>Group Button</h3>
        <hr />
        <ButtonGroup aria-label="Basic example">
          <Button onClick={() => setAlign("text-left")}> <JustifyLeft />   Left</Button>
          <Button onClick={() => setAlign("text-center")}> <Justify />  Middle</Button>
          <Button onClick={() => setAlign("text-right")}>   <JustifyRight />  Right</Button>
        </ButtonGroup>

        <div className={align} >
          <div className='border-text  border-secondary shadow p-2  mt-4'>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </div>
      </div >
    </>
  );
}

export default RBButtonGroups;
