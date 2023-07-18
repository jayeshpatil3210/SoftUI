import { red } from '@mui/material/colors';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '',
        uv: 2000,
        pv: 7000,
        amt: 2290,
    },
    {
        name: '',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    render() {
        return (

            <BarChart
                width={350}
                height={195}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid vertical={false} horizontal={false} strokeDasharray="1 1" fill='#3a416f' />
                <XAxis dataKey="name" tickLine={false} />
                <YAxis />
                <Tooltip cursor={false} />
                <Legend />
                <Bar dataKey="pv" barSize={10} fill="white" radius={20} />
                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
            </BarChart>
        );
    }
}
