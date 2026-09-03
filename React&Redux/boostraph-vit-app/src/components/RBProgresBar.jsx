import React, { useState } from 'react'
import { Breadcrumb, Button, Card, CardFooter, ProgressBar } from 'react-bootstrap'

function RBProgresBar() {

  const [value, setValue] = useState(10)
  const progress = () => {
    setValue(value + 5)

  }
  const IncreasePro = () => {
    setValue(value - 5)

  }


  return (


    <>
     <Breadcrumb className="mb-5">

                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Layout
                </Breadcrumb.Item>
                
                <Breadcrumb.Item active>ProgressBar</Breadcrumb.Item>
            </Breadcrumb>


      <div className='mt-5'>
        <Button variant='primary' className='me-5' onClick={progress}> progress + 5% </Button>
        <Button variant='primary' onClick={IncreasePro}> progress - 5% </Button>



        <div className='mt-5'>

          <ProgressBar striped variant="success" className='mb-2' label={`${value}%`} now={value} />
          <ProgressBar striped variant="info" now={value} style={{ height: '10px' }} />



          <Card style={{ width: '18rem' }} className='mt-5'>
            <Card.Body>
              <Card.Title>Bootstrap Dashboard Application</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Web Develoments</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                <Button style={{ height: '40px' }} className='me-3'>in proress</Button>
              </Card.Text>

              <ProgressBar striped variant="info" now={15}  label={'15%'}   style={{ height: '10px' }} />

            </Card.Body>
            <CardFooter className='button'>
              <div style={{ width: '100px', }}>
                due date: 1 Jan 2022
              </div>
              <div style={{ width: '100px' }}>
                Budget: $123,000
              </div>


            </CardFooter>
          </Card>
        </div>
      </div>

    </>
  )
}

export default RBProgresBar
