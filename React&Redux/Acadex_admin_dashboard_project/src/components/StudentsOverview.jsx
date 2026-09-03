import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import { statsData } from '../data/js/jsonPath';



const StudentsOverview = () => {
  return (
    <Row className="g-3">
      {statsData.Data.map((item) => (
        <Col
          key={item.id} 
          xl={3}    
          lg={3}   
          md={6}    
          sm={6}   
        >
          <div className="border-color p-3 rounded-3 d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap">

            
            <div className="mb-2 mb-md-0">
              <p className="XSmall-Medium gray-200 mb-1 text-truncate" style={{ maxWidth: "150px" }}>
                {item.title}
              </p>
              <div className="Display-4 text-dark">
                {item.value}
              </div>
            </div>

          
            <div className="bg-primary-subtle  rounded-2 d-flex align-items-center justify-content-center" style={{width:'40px', height:'40px'}}>
              <ArrowRight className="text-primary" size={24} />
            </div>

          </div>
        </Col>
      ))}
    </Row>
  );
};

export default StudentsOverview;
