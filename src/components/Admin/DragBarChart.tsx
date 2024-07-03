import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        name: '핫 아메리카노',
        count: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '아이스 라떼',
        count: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '아이스 카라멜마끼아또',
        count: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '아이스 아메리카노',
        count: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '아이스 바닐라라떼',
        count: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '딸기 스무디',
        count: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '망고 스무디',
        count: 3490,
        pv: 4300,
        amt: 2100,
    },
];
export const DragBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
                barSize={20}
            >
                <XAxis dataKey="name" padding={{ left: 10, right: 10 }} className='text-[10px]' dy={10} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid />
                <Bar dataKey="count" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
        </ResponsiveContainer>
    )
}
