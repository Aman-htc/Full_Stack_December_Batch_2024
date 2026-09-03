import { Breadcrumb } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';

function RBFigure() {
  return (
    <>


      <Breadcrumb>
        <Breadcrumb.Item to="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item to="#" >
          Layout
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Figure</Breadcrumb.Item>
      </Breadcrumb>
      <hr />

      <h3 className='text-primary'>Figure</h3>
      <hr />
      <Figure>
        <Figure.Image
          width={700}
          height={180}
          alt="171x180"
          src="https://cdn.prod.website-files.com/61f7efd44d01cc87c88dc6f3/6318e2916ddc28d60d89d319_Coding%20Vs.%20Programming%2002.jpg"
        />
        <Figure.Caption className='fs-5'>
          Difference Bwtween Coding $ Programming...
        </Figure.Caption>
      </Figure>
    </>
  );
}

export default RBFigure;