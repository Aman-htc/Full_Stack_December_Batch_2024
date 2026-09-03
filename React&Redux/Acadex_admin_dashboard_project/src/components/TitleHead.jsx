import React from 'react'
import { Col, Row } from 'react-bootstrap'

const TitleHead = ({ title, view }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="Title-4-Bold text-dark">
        {title}
      </div>

      <span className="Button-Small gray-100 text-nowrap">
        {view}
      </span>
    </div>

    </div>
  )
}

export default TitleHead
