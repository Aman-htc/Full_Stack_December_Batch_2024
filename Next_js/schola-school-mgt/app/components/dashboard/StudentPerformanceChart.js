'use client';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import { Card } from "react-bootstrap";
import { studentPerformance } from "@/app/data";
import DropdownBtn from "../dropdown";
import { useEffect, useState } from "react";
import { getAcademicPerformance } from "@/services/studentService";

const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload || payload.length === 0) return null;

    return (
        <div className="bg-white shadow-sm p-2 rounded-3">
            {payload.map((item, i) => (
                <div key={i} className="d-flex justify-content-between small mb-1">
                    <span style={{ color: item.color }}>{item.name}</span>
                    <strong>{item.value}%</strong>
                </div>
            ))}
        </div>
    );
};

export default function StudentPerformanceChart() {

    const [selectedPeriod, setSelectedPeriod] = useState("Last Semester");
    const [academicData, setAcademicData] = useState([]);


    const loadAcademicData = async (period) => {
        try {
            const res = await getAcademicPerformance(period);

            

            setAcademicData(res?.data || []);
        } catch (error) {
            console.error(error);
            setAcademicData([]);
        }
    };

    useEffect(() => {
        loadAcademicData(selectedPeriod);
    }, [selectedPeriod]);





    return (
        <Card className="border-0 shadow-sm rounded-4 p-3 h-100 bg-light ">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">

                {/* Title */}
                <h6 className="text-danger-subtle mb-0 h6-alt">
                    Student Performance
                </h6>


                <div className="d-flex align-items-center">

                    <DropdownBtn
                        text1={selectedPeriod}
                        value={selectedPeriod}
                        setValue={setSelectedPeriod}
                        options1={[
                            { label: "Last Semester", value: "Last Semester" },
                            { label: "This Semester", value: "This Semester" },
                            { label: "This Month", value: "This Month" },
                            { label: "Last Month", value: "Last Month" },
                        ]}
                    />
                </div>

            </div>
            <div className="d-flex gap-4 mb-3 ms-5 body-xs-reg text-danger flex-wrap">
                <div>
                    <span className="me-2 rounded-circle d-inline-block bg-primary wh-10"
                    />
                    Grade 7
                </div>

                <div>
                    <span className="me-2 rounded-circle d-inline-block bg-secondary wh-10"
                    />
                    Grade 8
                </div>

                <div>
                    <span className="me-2 rounded-circle d-inline-block bg-warning wh-10"
                    />
                    Grade 9
                </div>
            </div>


            {/* Chart */}
            <div style={{ height: 200 }}>
                <ResponsiveContainer>
                    <BarChart data={academicData} barSize={8} barGap={0}>

                        <CartesianGrid vertical={false} />

                        <XAxis dataKey="month" axisLine={{ stroke: "#e9ecef" }} tick={{ fill: "#66706D", fontSize: "11px" }} dy={10} tickLine={false} />

                        <YAxis
                            domain={[0, 100]}
                            tickFormatter={(val) => `${val}%`}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#66706D", fontSize: "11px" }}

                        />

                        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#eff8f5' }} />



                        <Bar dataKey="grade7" fill="#D1F5EA" name="Grade 7" radius={[12, 12, 0, 0]} />
                        <Bar dataKey="grade8" fill="#FBD5FF" name="Grade 8" radius={[12, 12, 0, 0]} />
                        <Bar dataKey="grade9" fill="#1A365D" name="Grade 9" radius={[12, 12, 0, 0]} />

                    </BarChart>
                </ResponsiveContainer>
            </div>

        </Card>
    );
}
