
export const getAcademicChartOptions = (academicPerformance = []) => ({
    chart: {
        type: "bar",
        stacked: false,
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: "inherit",
        parentHeightOffset: 0,
    },

    colors: ["#D9D9D9", "#CEEAF1", "#FFCDFD"],

    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "70%",
            borderRadius: 0,
        },
    },

    dataLabels: {
        enabled: false,
    },

    grid: {
        borderColor: "#DADADA",
        strokeDashArray: 0,
        padding: {
            top: -4,
            right: 0,
            bottom: -8,
            left: -4,
        },
    },

    legend: {
        show: true,
        position: "top",
        horizontalAlign: "left",
        offsetY: -2,
        offsetX: -4,
        customLegendItems: ["Grade 7", "Grade 8", "Grade 9"],
        markers: {
            width: 10,
            height: 10,
            radius: 3,
            fillColors: ["#D9D9D9", "#CEEAF1", "#FFCDFD"],
        },
        itemMargin: {
            horizontal: 22,
            vertical: 0,
        },
        labels: {
            colors: "#66706D",
        },
    },

    xaxis: {
        categories: academicPerformance.map((item) => item.month),
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
            offsetY: 2,
            style: {
                colors: "#66706D",
                fontSize: "13px",
                fontWeight: 400,
            },
        },
    },

    yaxis: {
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
            offsetX: -8,
            formatter: (value) => `${value}%`,
            style: {
                colors: "#66706D",
                fontSize: "13px",
                fontWeight: 400,
            },
        },
    },

    tooltip: {
        y: {
            formatter: (value) => `${value}%`,
        },
    },
});
export const getAcademicChartSeries = (academicPerformance = []) => [
    {
        name: "Grade 7",
        data: academicPerformance.map((item) => ({
            x: item.month,
            y: item.grade7,
            goals: [
                {
                    name: "Expected",
                    value: item.grade7 + 4 > 100 ? 100 : item.grade7 + 4,
                    strokeHeight: 5,
                    strokeColor: "#AFAFAF",
                },
            ],
        })),
    },
    {
        name: "Grade 8",
        data: academicPerformance.map((item) => ({
            x: item.month,
            y: item.grade8,
            goals: [
                {
                    name: "Expected",
                    value: item.grade8 + 4 > 100 ? 100 : item.grade8 + 4,
                    strokeHeight: 5,
                    strokeColor: "#15456F",
                },
            ],
        })),
    },
    {
        name: "Grade 9",
        data: academicPerformance.map((item) => ({
            x: item.month,
            y: item.grade9,
            goals: [
                {
                    name: "Expected",
                    value: item.grade9 + 4 > 100 ? 100 : item.grade9 + 4,
                    strokeHeight: 5,
                    strokeColor: "#F6B9F6",
                },
            ],
        })),
    },
];

export const getEnrollmentChartOptions = (enrollmentTrends) => ({
    chart: {
        type: "area",
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: "inherit",
    },
    colors: ["#15456F"],
    stroke: {
        width: 3,
        curve: "smooth",
    },
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.35,
            opacityTo: 0,
            stops: [0, 90, 100],
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        borderColor: "#E9F4F6",
    },
    xaxis: {
        categories: enrollmentTrends.map((item) => item.EnrollmentYear),
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
            style: {
                colors: "#66706D",
                fontSize: "11px",
            },
        },
    },
    yaxis: {
        labels: {
            formatter: (value) => {
                if (value >= 1000) return `${Math.round(value / 1000)}K`;
                return value;
            },
            style: {
                colors: "#66706D",
                fontSize: "11px",
            },
        },
    },
    tooltip: {
        y: {
            formatter: (value) => `${value.toLocaleString()} Students`,
        },
    },
});

export const getEnrollmentChartSeries = (enrollmentTrends) => [
    {
        name: "Students",
        data: enrollmentTrends.map((item) => item.TotalEnrolled),
    },
];


export const getAttendanceChartOptions = (attendanceOverview = []) => {

    const maxStudent = Math.max(
        ...attendanceOverview.map(item => Number(item.students || 0)),
        1
    );

    return {
        chart: {
            type: "bar",
            stacked: true,
            toolbar: { show: false },
            zoom: { enabled: false },
            fontFamily: "inherit",
        },

        colors: ["#FFCDFD", "#15456F"],

        fill: {
            type: ["gradient", "solid"],
            gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: 0,
                opacityFrom: 0.95,
                opacityTo: 0.15,
                stops: [0, 100],
            },
        },

        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "72%",
                borderRadius: 0,
                dataLabels: {
                    position: "top",
                },
            },
        },

        dataLabels: {
            enabled: true,
            enabledOnSeries: [0],
            formatter: (value) => value,
            offsetY: -20,
            style: {
                colors: ["#15456F"],
                fontSize: "12px",
                fontWeight: 700,
            },
            background: {
                enabled: false,
            },
        },

        grid: {
            borderColor: "#DADADA",
            strokeDashArray: 0,
            padding: {
                top: 40,
                right: 8,
                bottom: 0,
                left: 8,
            },
        },

        xaxis: {
            categories: attendanceOverview.map(item => item.day),
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
                offsetY: 10,
                style: {
                    colors: "#66706D",
                    fontSize: "13px",
                    fontWeight: 400,
                },
            },
        },

        yaxis: {
            min: 0,
            max: maxStudent + 1,
            tickAmount: Math.max(maxStudent + 1, 2),
            labels: {
                show: true,
            },
        },

        legend: {
            show: false,
        },

        tooltip: {
            y: {
                formatter: (value) => `${value} Students`,
            },
        },
    };
};
export const getAttendanceChartSeries = (attendanceOverview) => [
  {
    name: "Students",
    data: attendanceOverview.map(item => Number(item.students || 0)),
  },
];
// export const getAttendanceChartSeries = (attendanceOverview) => [
//     {
//         name: "Attendance",
//         data: attendanceOverview.map((item) => item.
// students
// ),
//     },
//     {
//         name: "Cap",
//         data: attendanceOverview.map((item) => 35),
//     },
// ];
export const getScoreRadialOptions = (academicPerformanceScore) => ({
    chart: {
        type: "radialBar",
        sparkline: { enabled: true },
        fontFamily: "inherit",
    },
    colors: ["#15456F"],
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
                size: "62%",
            },
            track: {
                background: "#FFCDFD",
                strokeWidth: "100%",
            },
            dataLabels: {
                name: {
                    show: true,
                    offsetY: 18,
                    color: "#66706D",
                    fontSize: "13px",
                    fontWeight: 400,
                },
                value: {
                    show: true,
                    offsetY: -8,
                    color: "#15456F",
                    fontSize: "24px",
                    fontWeight: 700,
                    formatter: () =>
                        `${academicPerformanceScore.averageScore}/${academicPerformanceScore.totalScore}`,
                },
            },
        },
    },
    labels: ["Average Score"],
    stroke: {
        lineCap: "round",
    },
});
export const getScoreRadialSeries = (academicPerformanceScore) => [
    (academicPerformanceScore.averageScore / academicPerformanceScore.totalScore) *
    100,
];
export const getStudentDetailsAcademicBarOptions = (
    academicPerformanceChart
) => ({
    chart: {
        type: "bar",
        stacked: true,
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: "inherit",
        parentHeightOffset: 0,
    },

    colors: ["#FFCDFD", "#F1F1F1"],

    fill: {
        type: ["gradient", "solid"],
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0,
            opacityFrom: 0.95,
            opacityTo: 0.5,
            stops: [0, 100],
        },
    },

    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "62%",
            borderRadius: 8,
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "last",
            dataLabels: {
                position: "top",
            },
        },
    },

    dataLabels: {
        enabled: true,
        enabledOnSeries: [0],
        formatter: (value, opts) => {
            const score = academicPerformanceChart[opts.dataPointIndex]?.score || 0;
            return score;
        },
        offsetY: -22,
        style: {
            colors: ["#15456F"],
            fontSize: "12px",
            fontWeight: 700,
        },
        background: {
            enabled: false,
        },
    },

    grid: {
        borderColor: "#E9E9E9",
        strokeDashArray: 0,
        padding: {
            top: 28,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },

    xaxis: {
        categories: academicPerformanceChart.map((item) => item.month),
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
            offsetY: 8,
            style: {
                colors: "#66706D",
                fontSize: "12px",
                fontWeight: 400,
            },
        },
    },

    yaxis: {
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
            show: false,
        },
    },

    legend: {
        show: false,
    },

    tooltip: {
        y: {
            formatter: (value, opts) => {
                const score = academicPerformanceChart[opts.dataPointIndex]?.score || 0;
                return `${score}%`;
            },
        },
    },
});
export const getStudentDetailsAcademicBarSeries = (
    academicPerformanceChart
) => [
        {
            name: "Score",
            data: academicPerformanceChart.map((item) => item.score),
        },
        {
            name: "Track",
            data: academicPerformanceChart.map((item) => 100 - item.score),
        },
    ];