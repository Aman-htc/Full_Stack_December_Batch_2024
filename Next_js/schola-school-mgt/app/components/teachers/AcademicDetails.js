"use client";


import React from "react";
import { Card,Table } from "react-bootstrap";
import { FiMoreHorizontal } from "react-icons/fi";

const AcademicDetails = ({
    AcademicInformation = [],
}) => {
    return (
     
        <Card className="shadow-sm h-100 bg-light border-0 rounded-4 p-2">
                <Card.Body>

                    {/* Header Section */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="h6-alt text-danger-subtle">
                            Academic Information
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
                                        Qualification
                                       
                                    </div>

                                </th>

                                <th className="bg-transparent border-0 text-dark cap-md-med">

                                    <div
                                        className="d-flex align-items-center"
                                      
                                        
                                    >
                                        University/Institute
                                        
                                    </div>

                                </th>

                                <th className="bg-transparent border-0 text-dark cap-md-med">

                                    <div
                                        className="d-flex align-items-center"
                                        style={{ cursor: "pointer" }}
                                        
                                    >
                                        Passing Year
                                        
                                    </div>

                                </th>

                                <th className="bg-transparent border-0 text-center text-dark  cap-md-med">

                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{ cursor: "pointer" }}
                                       
                                    >
                                        Specialization
                                       
                                    </div>

                                </th>
                                <th className="bg-transparent border-0 text-center  rounded-end-4 text-dark cap-md-med">

                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        
                                       
                                    >
                                     Percentage/Grade
                                        
                                    </div>

                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {AcademicInformation.length > 0 ? (
                                AcademicInformation.map((item) => (
                                    <tr
                                        key={item.AcademicID
}
                                        className="border-bottom border-light-subtle"
                                    >
                                        <td className="py-3 bg-transparent border-0 px-3">
                                            <div className="cap-lg-med text-dark mb-0">
                                                {item.Qualification
}
                                            </div>

                                            
                                        </td>

                                        <td className="bg-transparent border-0 cap-lg-med text-warning">
                                            
                                            <div className="cap-lg-med text-dark mb-0">
                                                {item.UniversityInstitute
}
                                            </div>
                                        </td>

                                        <td className="bg-transparent border-0 text-dark cap-lg-med">
                                            <div className="cap-lg-med text-dark mb-0">{item.PassingYear}</div>
                                            
                                        </td>

                                        <td className="bg-transparent border-0 text-center">
                                           
                                                <div className="cap-lg-med text-dark mb-0">{item.Specialization}</div>

                                            
                                        </td>
                                        <td className="bg-transparent border-0 text-center">
                                           
                                                <div className="cap-lg-med text-dark mb-0">{item.PercentageGrade}</div>

                                            
                                        </td>

                                        
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-4 text-muted">
                                        No Academic Details Available
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </Table>

                </Card.Body>
            </Card>
    );
};

export default AcademicDetails;