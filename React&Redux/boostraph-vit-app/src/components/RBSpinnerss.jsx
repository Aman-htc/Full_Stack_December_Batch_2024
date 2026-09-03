// import Spinner from 'react-bootstrap/Spinner';

// function Spinnerss() {
//   return (
//     <>

//     <h3 className='text-primary'>Spinner</h3>
//     <hr />
//       <Spinner animation="border" variant="primary" />
//       <Spinner animation="border" variant="secondary" />
//       <Spinner animation="border" variant="success" />
//       <Spinner animation="border" variant="danger" />
//       <Spinner animation="border" variant="warning" />
//       <Spinner animation="border" variant="info" />
//       <Spinner animation="border" variant="light" />
//       <Spinner animation="border" variant="dark" />
//       <Spinner animation="grow" variant="primary" />
//       <Spinner animation="grow" variant="secondary" />
//       <Spinner animation="grow" variant="success" />
//       <Spinner animation="grow" variant="danger" />
//       <Spinner animation="grow" variant="warning" />
//       <Spinner animation="grow" variant="info" />
//       <Spinner animation="grow" variant="light" />
//       <Spinner animation="grow" variant="dark" />
//     </>
//   );
// }

// export default Spinnerss;


import  { useState } from 'react'
import { Breadcrumb, Button, Spinner } from 'react-bootstrap'

function RBSpinnerss() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
  }

  const handleCancel = () => {
    setLoading(false)
  }

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item to="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item to="#" >
          Layout
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Spinner</Breadcrumb.Item>
      </Breadcrumb>
      <hr />

      <h3 className='text-primary mb-5'>Spinner</h3>






    
      <Button onClick={handleSubmit} >
        {loading ? (
          <>
            <Spinner
              animation="border"
              size="sm"
              className="me-2"
            />
            Submitting...
          </>
        ) : (
          "Click Submit"
        )}
      </Button>

    

      {loading ? (
        <>
          <Button
            variant='danger'
            className='ms-3'
             onClick={handleCancel}
          >
            Cancel
          </Button>
        </>
      ) : (
        <Button
          variant='danger'
          className='ms-3'
          disabled
         
        >
          Cancel
        </Button>
      )}


    </div>
  )
}

export default RBSpinnerss

