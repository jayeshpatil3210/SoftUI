import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Apr',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'May',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Jun',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'July',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Aug',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Sep',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Oct',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/customized-legend-event-l19fo';

    state = {
        opacity: {
            uv: 1,
            pv: 1,
        },
    };

    handleMouseEnter = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;

        this.setState({
            opacity: { ...opacity, [dataKey]: 0.5 },
        });
    };

    handleMouseLeave = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;

        this.setState({
            opacity: { ...opacity, [dataKey]: 1 },
        });
    };

    render() {
        const { opacity } = this.state;

        return (
            <div style={{ width: '100%' }}>
                <ResponsiveContainer width="100%" height={343}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip cursor={false} />
                        <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
                        <Line type="monotone" dataKey="pv" strokeOpacity={opacity.pv} stroke="#d63384" activeDot={{ r: 8 }} strokeWidth={3} dot={false} />
                        <Line type="monotone" dataKey="uv" strokeOpacity={opacity.uv} stroke="#596cff" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
