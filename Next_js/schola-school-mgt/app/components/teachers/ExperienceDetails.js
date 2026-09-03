"use client";


import React from "react";
import { Card, Table } from "react-bootstrap";
import { FiMoreHorizontal } from "react-icons/fi";

const ExperienceDetails = ({
    Experience = [],
}) => {
    return (

        <Card className="shadow-sm h-100 bg-light border-0 rounded-4 p-2">
            <Card.Body>

                {/* Header Section */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="h6-alt text-danger-subtle">
                        Experience Information
                    </h4>

                    <div>
                        <FiMoreHorizontal className="text-muted" size={18} />

                    </div>





                </div>


                <Table responsive hover className="table-borderless align-middle bg-transparent">

                    <thead>
                        <tr className="border-bottom bg-white ">

                            <th className="bg-transparent border-0 px-3 rounded-start-4 text-dark cap-md-med">

                                <div
                                    className="d-flex align-items-center"
                                    style={{ cursor: "pointer" }}

                                >
                                    University/Institute

                                </div>

                            </th>

                            <th className="bg-transparent border-0 text-dark cap-md-med">

                                <div
                                    className="d-flex align-items-center"


                                >
                                    Job Title

                                </div>

                            </th>

                            <th className="bg-transparent border-0 text-dark cap-md-med">

                                <div
                                    className="d-flex align-items-center"
                                    style={{ cursor: "pointer" }}

                                >
                                    Start Date

                                </div>

                            </th>

                            <th className="bg-transparent border-0 text-center text-dark  cap-md-med">

                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{ cursor: "pointer" }}

                                >
                                    End Date

                                </div>

                            </th>
                            <th className="bg-transparent border-0 text-center  rounded-end-4 text-dark cap-md-med">

                                <div
                                    className="d-flex align-items-center justify-content-center"


                                >
                                    Status

                                </div>

                            </th>
                            <th className="bg-transparent border-0 text-center  rounded-end-4 text-dark cap-md-med">

                                <div
                                    className="d-flex align-items-center justify-content-center"


                                >
                                    Description

                                </div>

                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {Experience.length > 0 ? (
                            Experience.map((item) => (
                                <tr
                                    key={item.
                                        ExperienceID

                                    }
                                    className="border-bottom border-light-subtle"
                                >
                                    <td className="py-3 bg-transparent border-0 px-3">
                                        <div className="cap-lg-med text-dark mb-0">
                                            {item.OrganizationName

                                            }
                                        </div>


                                    </td>

                                    <td className="bg-transparent border-0 cap-lg-med text-warning">

                                        <div className="cap-lg-med text-dark mb-0">
                                            {item.
                                                JobTitle
                                            }
                                        </div>
                                    </td>

                                    <td className="bg-transparent border-0 text-dark cap-lg-med">
                                        <div className="cap-lg-med text-dark mb-0">{item.StartDate
                                        }</div>

                                    </td>

                                    <td className="bg-transparent border-0 text-center">

                                        <div className="cap-lg-med text-dark mb-0">{item.EndDate
                                        }</div>


                                    </td>
                                    <td className="bg-transparent border-0 text-center">

                                        <div className="cap-lg-med text-dark mb-0">{item.
                                            IsCurrent}</div>


                                    </td>
                                    <td className="bg-transparent border-0 text-center">

                                        <div className="cap-lg-med text-dark  mb-0">{item.

                                            Description}</div>


                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4 text-muted">
                                    No  Teacher Experience Details Available
                                </td>
                            </tr>
                        )}
                    </tbody>

                </Table>

            </Card.Body>
        </Card>
    );
};

export default ExperienceDetails;