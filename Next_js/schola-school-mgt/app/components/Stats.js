import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Stats = ({ data, iconMap, iconStyles }) => {
    return (
        <div>
            <Row className="g-4">
                {data.map((item) => {
                    const Icon = iconMap[item.icon];
                    const style = iconStyles[item.icon];

                    return (
                        <Col key={item.id} xl={3} lg={3} md={6} sm={6}>
                            <div
                                className="p-3 p-md-4 bg-light rounded-4 shadow-sm d-flex align-items-center justify-content-between h-100"
                                style={{ minHeight: "90px" }}
                            >
                                {/* TEXT */}
                                <div className="overflow-hidden">
                                    <p className="text-danger body-xs-med mb-1 text-truncate">
                                        {item.title}
                                    </p>

                                    <h4 className="mb-0 text-danger-subtle fw-bold">
                                        {item.value}
                                    </h4>
                                </div>

                                {/* ICON */}
                                <div
                                    className="d-flex align-items-center justify-content-center rounded-4"
                                    style={{
                                        width: 46,
                                        height: 46,
                                        backgroundColor: style.bg,
                                        flexShrink: 0,
                                    }}
                                >
                                    {Icon && (
                                        <Icon size={20} style={{ color: style.color }} />
                                    )}
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>

        </div>
    )
}

export default Stats
