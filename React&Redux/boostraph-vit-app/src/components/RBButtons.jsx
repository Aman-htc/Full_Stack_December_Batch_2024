import { Breadcrumb, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link45deg } from 'react-bootstrap-icons';

function RBButtons() {
  const [isBold, setIsBold] = useState(false);
  const [isItailic, setIsItailic] = useState(false);
  const [iscenterline, setIsCenterline] = useState(false);
  const [isunderline, setIsUnderline] = useState(false);

  const makeBold = () => {
    setIsBold(!isBold);

  };
  const makeItailic = () => {

    setIsItailic(!isItailic);
  };
  const makecenterline = () => {

    setIsCenterline(!iscenterline);
  };
  const makeunderline = () => {

    setIsUnderline(!isunderline);
  };

  return (


    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Layout
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Button</Breadcrumb.Item>
      </Breadcrumb>



      <h3 className='text-primary'>Button Style</h3>
      <hr />
      <div className='rounded-5 bg-white shadow-lg p-5'>

        <Button type="submit" className='me-2'> Narmal Button</Button>
        <Button type="submit" className='me-2'> Edit Record</Button>
        <Button type="submit" className='me-2' variant='outline-primary'> Outline Buttom</Button>
        <Button type="submit" className='me-2' disabled> disabled Buttom</Button>



        <div className='mt-5'>

          <h3 className='text-primary'>Button Style</h3>
          <hr />

          <Button href="#" className='me-2' >Link</Button>
          <Button type="submit" className='me-2'>Button</Button>
          <Button as="input" className='me-2' type="button" value="Input" />
          <Button as="input" className='me-2' type="submit" value="Submit" />
          <Button as="input" className='me-2' type="reset" value="Reset" />
        </div>





        <div className='mt-4'>
          <h3 className='text-primary'>Toggle button</h3>
          <hr />
          <ToggleButtonGroup type="checkbox">

            <ToggleButton
              id="bold-btn"
              type="checkbox"

              onClick={makeBold}
            >
              B
            </ToggleButton>
            <ToggleButton
              id="bold-btn"
              type="checkbox"

              onClick={makeItailic}
            >
              I
            </ToggleButton>
            <ToggleButton
              id="bold-btn"
              type="checkbox"

              variant='outline-primary'
              onClick={makeunderline}
            >
              u
            </ToggleButton>
            <ToggleButton
              id="bold-btn"
              type="checkbox"

              variant='outline-primary'
              onClick={makecenterline}
            >
              <Link45deg />

            </ToggleButton>
          </ToggleButtonGroup>
        </div>


        <div
          className={`
              ${isBold ? "" : "bold-text"}
              ${isItailic ? "" : "text-italic"}
              ${isunderline ? "text-under" : ""}
              ${iscenterline ? "text-line" : ""}
            `}
        >
          <div className='border-text border-secondary shadow p-2 mt-4'>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </div>
      </div>


    </>

  );
}

export default RBButtons;




