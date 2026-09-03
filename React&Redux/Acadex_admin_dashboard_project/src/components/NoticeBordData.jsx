import React from "react";
import avtarimage from '../assets/image/avtarimage.webp'
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { Bullseye, Plus, ThreeDots } from "react-bootstrap-icons";
import {FilterButton} from "./main/index";
import { noticeData } from "../data/js/jsonPath";


const NoticeBoardData = () => {
  const data = noticeData.noticeData;

  return (
    <Card className="p-3 border-color bg-color rounded-4">
      {/* Header */}
      <Row className="align-items-center mb-3 flex-wrap">
        <Col xs={12} md={6}>
          <h2 className="Title-4-Medium text-dark mb-2 mb-md-0">
            Notice Board
          </h2>
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-md-end flex-wrap gap-2"
        >
          <span className="gray-200 XSmall-Regular">Sort by:</span>
          <FilterButton text="Latest" />
          <Button className="bg-primary p-2 border-0 d-flex align-items-center justify-content-center rounded-2">
            <Plus color="white" size={22} />
          </Button>
        </Col>
      </Row>

      {/* Notice Items */}
      {data.length > 0 ? (
        data.map((item, index) => (
          <Row
            key={index}
            className="align-items-center mb-3 p-2 rounded hover-shadow"
          >
            
            <Col
              // xs={12}
              md={5}
              className="mb-2 mb-md-0 d-flex flex-column flex-md-row align-items-start align-items-md-center"
            >
              <Image
                src={avtarimage}
                style={{ width: "50px", height: "55px" }}
                className="rounded-2 me-md-2 mb-2 mb-md-0"
              />
              <div>
                <p className="XSmall-Medium text-dark mb-1 text-truncate" >
                  {item.title}
                </p>
                <p className="XSmall-Regular descripation gray-200 mb-0" >
                  {item.description}
                </p>
              </div>
            </Col>

            {/* Date */}
            <Col  md={2} className="mb-2 mb-md-0">
              <h4 className="XSmall-Regular gray-100 mb-0">{item.date}</h4>
            </Col>

            {/* Source */}
            <Col xs={12} md={3} className="mb-2 mb-md-0">
              <h4 className="XSmall-Medium gray-100 mb-0">{item.source}</h4>
            </Col>

            {/* Count */}
            <Col xs={6} md={1} className="d-flex align-items-center mb-2 mb-md-0">
              <span className="bg-primary p-1 box-round d-flex align-items-center justify-content-center">
                <Bullseye size={12} color="white" />
              </span>
              <span className="ms-2 XSmall-Medium text-center gray-100">{item.count}</span>
            </Col>

            {/* More Options */}
            <Col xs={6} md={1} className="text-end">
              <ThreeDots className="gray-200 cursor-pointer" />
            </Col>
          </Row>
        ))
      ) : (
        <div className="text-center gray-200 XSmall-Regular py-5">
           No notices available at the moment.
        </div>
      )}
    </Card>
  );
};

export default NoticeBoardData;
