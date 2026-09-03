
"use client"

import React, { useEffect, useState } from 'react';
import { Container, Table, Badge, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownBtn from '../dropdown';

import { getdashboardnotic } from '@/services/dashboardService';


const NoticeBoard = ({ search }) => {



    const [selectedPeriod, setSelectedPeriod] = useState("Popular");
    const [noticeData, setNoticeData] = useState([]);


    const loadnoticData = async (period) => {
        try {
            const res = await getdashboardnotic(period);

           

            setNoticeData(res?.data || []);
        } catch (error) {
            console.error(error);
            setAcademicData([]);
        }
    };

    useEffect(() => {
        loadnoticData(selectedPeriod);
    }, [selectedPeriod]);


    const filteredNotice = noticeData.filter((item) => {
        const value = (search || "").toLowerCase().trim();

        if (!value) return true;

        return (

            item.Title?.toLowerCase().includes(value) ||
            item.Category?.toLowerCase().includes(value) ||
            item.Status?.toLowerCase().includes(value) ||
            item.Audience?.toLowerCase().includes(value) ||
            item.CreatedBy?.toLowerCase().includes(value) ||
            item.ExpDate?.toLowerCase().includes(value)
           


        );
    });








    return (
        <div className="mt-4 p-3 p-md-4 bg-light rounded-4 shadow-sm w-100">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-danger-subtle h6-alt">Notice Board</h4>
                <div className="d-flex align-items-center gap-2">
                    <small className="text-muted">Sort by:</small>


                    <DropdownBtn
                        text1={selectedPeriod}
                        value={selectedPeriod}
                        setValue={setSelectedPeriod}
                        options1={[
                            { label: "Popular", value: "Popular" },
                            { label: "Latest", value: "Latest" },
                            { label: "Oldest", value: "Oldest" },
                        ]}
                    />
                </div>
            </div>

            {/* Notice Table */}
            <div className=" p-3 rounded-3 bg-light ">
                <div className="overflow-hidden ">
                    <Table hover responsive className="mb-0 align-middle table-borderless ">
                        <tbody >
                            {filteredNotice.length > 0 ? (
                                filteredNotice.map((item, index) => (
                                    <tr key={index} className="border-bottom ">
                                        <td className="p-3 bg-light">
                                            <div className="d-flex gap-3">
                                                <div
                                                    className="rounded-3 bg-secondary"
                                                    style={{ width: '45px', height: '45px' }}
                                                ></div>
                                                <div>
                                                    <div className="mb-1 text-dark body-lg">
                                                        {item.
                                                            Title}
                                                    </div>
                                                    <div className="d-flex gap-2 cap-md-med">

                                                        <div
                                                            className={`p-1 rounded-3 ${item.Category === "Academic"
                                                                ? "text-danger-subtle bg-secondary"
                                                                : item.Category === "Announcement"
                                                                    ? "text-danger-subtle bg-success"
                                                                    : item.Category === "Finance"
                                                                        ? "text-light bg-primary"
                                                                        : item.Category === "Training"
                                                                            ? "text-dark bg-warning"
                                                                            : item.Category === "Resource"
                                                                                ? "text-danger-subtle bg-danger-light"
                                                                                : "text-dark bg-light"
                                                                }`}
                                                        >
                                                            {item.Category}
                                                        </div>

                                                        <div className='p-1 text-light bg-primary rounded-3'>
                                                            {item.
                                                                Status}

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Audience Section */}
                                        <td className='bg-light'>
                                            <div className="text-danger cap-md-med">Audience</div>
                                            <div className="text-dark body-xs-med">{item.Audience}</div>
                                        </td>

                                        {/* Date Section */}
                                        <td className='bg-light'>
                                            <div className="text-danger cap-md-med">Date</div>
                                            <div className="text-dark body-xs-med">{item.
                                                ExpDate}</div>
                                        </td>

                                        {/* Created By Section */}
                                        <td className='bg-light'>
                                            <div className="text-danger cap-md-med">Created By</div>
                                            <div className="text-dark body-xs-med" style={{ fontSize: '0.85rem' }}>{item.
                                                CreatedBy}</div>
                                        </td>

                                        {/* Action Menu */}
                                        <td className="text-end pe-3 bg-light">
                                            <Button variant="link" className="text-muted p-0 text-decoration-none fw-bold">...</Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="text-center py-4">
                                        No notice found
                                    </td>
                                </tr>

                            )}
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
    );
};

export default NoticeBoard;
