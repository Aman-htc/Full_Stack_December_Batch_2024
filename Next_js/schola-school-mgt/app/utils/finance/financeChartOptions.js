const formatAmount = (value) => Number(value || 0).toLocaleString("en-US");

// export const getExpenseTrendChartOptions = (expenseTrend = []) => ({
//     chart: {
//         type: "bar",
//         toolbar: { show: false },
//         zoom: { enabled: false },
//         fontFamily: "inherit",
//         parentHeightOffset: 0,
//     },

//     colors: ["#FFCDFD"],

//     plotOptions: {
//         bar: {
//             columnWidth: "58%",
//             borderRadius: 8,
//             borderRadiusApplication: "end",
//         },
//     },

//     dataLabels: {
//         enabled: false,
//     },

//     grid: {
//         show: true,
//         borderColor: "",
//         strokeDashArray: 0,
//         padding: {
//             top: 4,
//             right: 0,
//             bottom: 0,
//             left: 0,
//         },
//     },

//     xaxis: {
//         categories: expenseTrend.map((item) => item.month),
//         axisBorder: { show: false },
//         axisTicks: { show: false },
//         labels: {
//             offsetY: 8,
//             style: {
//                 colors: "#66706D",
//                 fontSize: "12px",
//                 fontWeight: 400,
//             },
//         },
//     },

//     yaxis: {
//         min: 0,
//         max: 100000,
//         tickAmount: 4,
//         labels: {
//             formatter: (value) => `$${Math.round(value / 1000)}K`,
//             style: {
//                 colors: "#66706D",
//                 fontSize: "12px",
//                 fontWeight: 400,
//             },
//         },
//     },

//     tooltip: {
//         marker: { show: false },
//         y: {
//             formatter: (value) => `$${formatAmount(value)}`,
//             title: {
//                 formatter: () => "",
//             },
//         },
//     },

//     legend: {
//         show: false,
//     },
//     states: {
//         hover: {
//             filter: {
//                 type: "#15456F",
//                 value: 0.15,
//             },
//         },

//         active: {
//             filter: {
//                 type: "#15456F",
//                 value: 0.15,
//             },
//         },
//     },

// })
export const getExpenseTrendChartOptions = (expenseTrend = []) => ({
    chart: {
        type: "bar",
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: "inherit",
        parentHeightOffset: 0,
    },

    colors: ["#FFCDFD"],

    plotOptions: {
        bar: {
            columnWidth: "58%",
            borderRadius: 8,
            borderRadiusApplication: "end",
        },
    },

    dataLabels: {
        enabled: false,
    },

    grid: {
        show: true,
        borderColor: "#E5E5E5",
        strokeDashArray: 0,
        padding: {
            top: 4,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },

    xaxis: {
        categories: expenseTrend.map((item) => item.MonthName),
        axisBorder: { show: false },
        axisTicks: { show: false },
        crosshairs: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
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
        max: 100000,
        tickAmount: 4,

        crosshairs: {
            show: false,
        },

        labels: {
            formatter: (value) => `$${Math.round(value / 1000)}K`,
            style: {
                colors: "#66706D",
                fontSize: "12px",
                fontWeight: 400,
            },
        },
    },

    tooltip: {
        marker: { show: false },
        y: {
            formatter: (value) => `$${formatAmount(value)}`,
            title: {
                formatter: () => "",
            },
        },
    },

    legend: {
        show: false,
    },

    states: {
        hover: {
            filter: {
                type: "none",
            },
        },

        active: {
            filter: {
                type: "none",
            },
        },
    },

});



export const getExpenseTrendChartSeries = (expenseTrend = []) => [
    {
        name: "Expense",
        data: expenseTrend.map((item) => item.TotalAmount),
    },
];

export const getExpenseBreakdownOptions = (expenseBreakdown) => ({
    chart: {
        type: "donut",
        toolbar: { show: false },
        fontFamily: "inherit",
        parentHeightOffset: 0,
    },

    colors: ["#15456F", "#FFCDFD", "#CEEAF1", "#D9D9D9", "#F1F1F1"],

    labels: expenseBreakdown.categories.map((item) => item.title),

    dataLabels: {
        enabled: false,
    },

    legend: {
        show: false,
    },

    stroke: {
        width: 0,
    },

    plotOptions: {
        pie: {
            donut: {
                size: "68%",
                labels: {
                    show: true,
                    name: {
                        show: true,
                        color: "#66706D",
                        fontSize: "12px",
                        fontWeight: 400,
                        formatter: () => "Total Expense",
                    },
                    value: {
                        show: true,
                        color: "#15456F",
                        fontSize: "18px",
                        fontWeight: 700,
                        formatter: () => `$${formatAmount(expenseBreakdown.totalExpense)}`,
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: "Total Expense",
                        color: "#66706D",
                        fontSize: "12px",
                        formatter: () => `$${formatAmount(expenseBreakdown.totalExpense)}`,
                    },
                },
            },
        },
    },

    tooltip: {
        y: {
            formatter: (value) => `$${formatAmount(value)}`,
        },
    },
});

export const getExpenseBreakdownSeries = (expenseBreakdown) =>
    expenseBreakdown.categories.map((item) => item.amount);


export const getFeesTrendChartOptions = (
    feesCollectionTrend = [],
    hoveredPoint = null,
    setHoveredPoint = () => { }
) => ({
    chart: {
        type: "area",
        toolbar: { show: false },
        zoom: { enabled: false },
        fontFamily: "inherit",
        parentHeightOffset: 0,

        events: {
            dataPointMouseEnter: function (event, chartContext, config) {
                setHoveredPoint(config.dataPointIndex);
            },
            dataPointMouseLeave: function () {
                setHoveredPoint(null);
            },
            mouseLeave: function () {
                setHoveredPoint(null);
            },
        },
    },

    colors: ["#15456F"],

    stroke: {
        curve: "smooth",
        width: 4,
    },

    markers: {
        size: 6,
        colors: ["#15456F"],
        strokeColors: "#15456F",
        strokeWidth: 0,
        hover: {
            size: 8,
            sizeOffset: 2,
        },
        discrete:
            hoveredPoint !== null
                ? [
                    {
                        seriesIndex: 0,
                        dataPointIndex: hoveredPoint,
                        fillColor: "#F7B8F7",
                        strokeColor: "#15456F",
                        size: 8,
                        strokeWidth: 4,
                    },
                ]
                : [],
    },

    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
        active: {
            filter: {
                type: "none",
            },
        },
    },

    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            opacityFrom: 0.35,
            opacityTo: 0.04,
            stops: [0, 90, 100],
            colorStops: [
                {
                    offset: 0,
                    color: "#FFCDFD ",
                    opacity: 0.45,
                },
                {
                    offset: 100,
                    color: "#FFCDFD",
                    opacity: 0.06,
                },
            ],
        },
    },

    dataLabels: {
        enabled: false,
    },

    grid: {
        show: true,
        borderColor: "#DADADA",
        strokeDashArray: 0,
        xaxis: {
            lines: { show: true },
        },
        yaxis: {
            lines: { show: true },
        },
        padding: {
            top: 12,
            right: 8,
            bottom: 0,
            left: 8,
        },
    },

    xaxis: {
        categories: feesCollectionTrend.map((item) => item.MonthName),
        axisBorder: { show: false },
        axisTicks: { show: false },
        tooltip: {
            enabled: false,
        },
        labels: {
            offsetY: 8,
            style: {
                colors: "#66706D",
                fontSize: "13px",
                fontWeight: 400,
            },
        },
    },

    yaxis: {
        min: 0,
        max: 100000,
        tickAmount: 4,
        labels: {
            formatter: (value) => `$${Math.round(value / 1000)}K`,
            style: {
                colors: "#66706D",
                fontSize: "13px",
                fontWeight: 400,
            },
        },
    },

    tooltip: {
        enabled: true,
        shared: false,
        intersect: true,
        marker: { show: false },
        y: {
            formatter: (value) => `$${formatAmount(value)}`,
            title: {
                formatter: () => "",
            },
        },
    },

    legend: {
        show: false,
    },
});


export const getFeesTrendChartSeries = (feesCollectionTrend = []) => [
    {
        name: "Fees Collection",
        data: feesCollectionTrend.map((item) => item.TotalCollected
),
    },
];
