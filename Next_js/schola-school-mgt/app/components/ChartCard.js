"use client";

import dynamic from "next/dynamic";
import { Card, Button } from "react-bootstrap";
import { FiChevronDown } from "react-icons/fi";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ChartCard({
    title,
    buttonText,
    options,
    series,
    type,
    height,
    chartClassName = "",
}) {
    return (
        <Card className="border-0 rounded-4 shadow-sm bg-white h-100 chart-card">
            <Card.Body>
                <div className="chart-card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <h2 className="card-heading mb-0">{title}</h2>

                    {buttonText && (
                        <Button
                            variant="primary"
                            size="sm"
                            className="rounded-3 d-inline-flex align-items-center gap-2 chart-filter-btn"
                        >
                            {buttonText}
                            <FiChevronDown size={14} />
                        </Button>
                    )}
                </div>

                <div className={`chart-card-body ${chartClassName}`}>
                    <Chart options={options} series={series} type={type} height={height} />
                </div>
            </Card.Body>
        </Card>
    );
}
