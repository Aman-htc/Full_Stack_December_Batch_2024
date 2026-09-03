import React from "react";

import avtarimage from '../assets/image/avtarimag2.webp';
import { Card, Col, Image, Row } from "react-bootstrap";
import { notificationData } from "../data/js/jsonPath";
import {TitleHead} from "./main/index";




const Notification = () => {
  // const date= new Date()
  // const time =
  // String(date.getHours()).padStart(2, "0") + ":" +
  // String(date.getMinutes()).padStart(2, "0");
  

  
  const notifications = notificationData.notification.slice(0,5);

  return (
    <Card className=" h-100 p-2 p-md-3 pb-xl-4  border-color bg-color rounded-4">


      <TitleHead title="Messages" view="View All" />

      {/* Notification Items */}
      {notifications.length > 0 ? (
        notifications.map((item) => (
          <Row key={item.id} className="align-items-start py-2">

            {/* Avatar */}
            <Col xs="auto" className="pe-2">
              <Image
                src={avtarimage }
                roundedCircle
                width={32}
                height={32}
                alt={item.name}
              />
            </Col>

            {/* Content */}
            <Col className="ps-0">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <span className="text-dark XSmall-Medium text-truncate" >
                  {item.name}
                </span>

                <span className="gray-100 XSmall-Regular text-nowrap">
                  {item.time}
                </span>
              </div>

              <p className="gray-200  descripation XSmall-Regular mb-0 text-wrap">
                {item.title}
              </p>
            </Col>
          </Row>
        ))
      ) : (
        <div className="text-center gray-200 XSmall-Regular py-3">
          No messages yet. Once messages arrive, you will see them here!
        </div>
      )}
    </Card>
  );
};

export default Notification;
