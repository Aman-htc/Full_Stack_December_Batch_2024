import React from "react";

import { Card } from "react-bootstrap";

import { ThreeDots } from "react-bootstrap-icons";
import { studentYearData } from "../data/js/jsonPath";
import {TitleHead} from "./main/index";


const radius = 70;
const stroke = 10;
const circumference = 2 * Math.PI * radius;

function StudentsYearData() {

    const list = studentYearData.data;

    const totalValue = list.reduce(
        (sum, item) => sum + (item.value || 0),
        0
    );

    const gap = 20;
    let offset = 0;

    return (
        <Card className="border-color h-100 bg-color px-2 pt-2 pt-md-3  px-md-4 pb-xl-2  rounded-4">


            <TitleHead title='Students' view={<ThreeDots size={18} />
            } />

            {/* Chart */}
            <div className="chart-wrapper position-relative">
                <svg width="180" height="180">
                    <g transform="translate(90,90)">
                        {list.map((item, i) => {
                            const percent = item.value / totalValue;
                            const segmentLength = percent * circumference;
                            const visibleLength = segmentLength - gap;

                            const dashOffset = circumference - offset;

                            
                            offset += segmentLength;

                            return (
                                <circle
                                    key={i}
                                    r={radius}
                                    fill="transparent"
                                    stroke={item.color}
                                    strokeWidth={stroke}
                                    strokeDasharray={`${visibleLength} ${circumference - visibleLength}`}
                                    strokeDashoffset={dashOffset}
                                    strokeLinecap="round"
                                />
                            );
                        })}
                    </g>
                </svg>

                {/* Center text */}
                <div className="chart-center text-center">
                    <span className="Display-4 text-dark">
                        {studentYearData.total.toLocaleString()}
                    </span>
                    <p className="XSmall-Regular gray-200">Total Students</p>
                </div>
            </div>

            
            <div className="mt-2">
                {list.map((item, i) => (
                    <div
                        key={i}
                        className="d-flex justify-content-between align-items-center mb-3"
                    >
                        <span
                            className="spansmallbox rounded-1 me-1 "
                            style={{ background: item.color }}
                        />

                        <p className="Button-Medium text-dark mb-0">
                            {item.year}
                            <span className="gray-100 XSmall-Regular">
                                {" "}({((item.value / totalValue) * 100).toFixed(2)}%)
                            </span>
                        </p>

                        <p className="ms-auto Button-Small mb-0">
                            {item.value.toLocaleString()} students
                        </p>
                    </div>
                ))}
            </div>

        </Card>
    );
}

export default StudentsYearData;
