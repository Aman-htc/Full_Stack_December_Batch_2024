import React from 'react'
import { Badge, Col, Image, Row } from 'react-bootstrap'
import { Envelope, Heart, Star, Wallet } from 'react-bootstrap-icons'

const Profile = () => {
    return (
        <div>
            <Row className='d-flex justify-content-center'>
                <Col lg={3} className="text-center">

                    <Image className="w-25" src="https://thumbs.dreamstime.com/b/intelligent-boy-avatar-glasses-flat-style-isolated-white-background-black-hair-round-ideal-educational-apps-392811046.jpg" />
                    <p>Aman kushwaha</p>
                    <Badge className="p-2 mb-4">8102648831</Badge>
                    <div className="d-flex justify-content-between mb-3">
                        <h5>  <Envelope /> Aman@8923gmail.com</h5>
                       
                    </div>
                    
                    <h5 className="mb-3 text-start">Gopalganj</h5>
                    <h5 className="text-start"> 841440</h5>
                    <h5 className="text-start">Bihar</h5>
                </Col>
            </Row>

        </div>
    )
}

export default Profile
