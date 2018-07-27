import React, { Component }  from 'react';
import { Line } from 'react-chartjs-2';


export default function ChartLine({ data }) {
    return (
        <Line data={data} />
    )
}
