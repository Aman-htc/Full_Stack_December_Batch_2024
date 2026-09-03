import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

import { Card } from "react-bootstrap";
import {FilterButton} from "./main/index";
import { earningsData } from '../data/js/jsonPath';


const EarningsChart = () => {
    return (
        <Card className=" h-100 pt-md-1  pe-1 pe-md-3 border-color bg-color rounded-4 ">
            
            <div className="d-flex justify-content-between mt-2 ms-3 align-items-center mb-3">
                <h5 className="mb-0 Title-4-Bold text-dark">Earnings</h5>
                <FilterButton text="Last Semester" />
            </div>

            {/* Legend */}
            <div className="d-flex gap-4 mb-3 ms-3 text-muted small">
                <div className="d-flex gray-200 XSmall-Regular align-items-center gap-2">
                    <span
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: "#1f5edc"
                        }}
                    />
                    Earnings
                </div>

                <div className="d-flex XSmall-Regular gray-200 align-items-center gap-2">
                    <span
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: "#2f9e6f"
                        }}
                    />
                    Expenses
                </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={240}>
                <BarChart
                    data={earningsData.earningsReport}
                    barGap={8}
                >
                    <CartesianGrid strokeDasharray="" vertical={false} 
                    strock='#EEEEEE'
                     />

                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        dy={10}
                        tick={{ fill: "#A6A6A8", fontSize:'10px',fontFamily:'sans-serif' }}
                    />

                    <YAxis
                        axisLine={false}
                        
                        tickLine={false}
                        tickFormatter={(v) => `${v / 1000}K`}
                        tick={{ fill: "#A6A6A8",fontSize:'10px',fontFamily:'sans-serif',margin:'3px' }}
                    />

                    

                    <Bar
                        dataKey="expenses"
                        fill="#2f9e6f"
                        radius={[3, 3, 0, 0]}
                        barSize={10}
                    />
                    <Bar
                        dataKey="earnings"
                        fill="#1f5edc"
                        radius={[3, 3, 0, 0]}
                        

                        barSize={10}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default EarningsChart;
