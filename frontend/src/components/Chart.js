import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, CustomizedLabel, Tooltip, Legend } from 'recharts';
import '../css/style.css'
import View from './View'
import {CaseContext} from '../contexts/CaseContext';

export default function Chart() {

    const { data } = useContext(CaseContext); //bring in the data object from the context

    return (
        <div className="container"> 
            <View />
            {/* This renders the plot of numbers of cases by the months in a year, when filtered
            it renders base on the selected view type */}
            <div className="chart">
                <LineChart width={800} height={400} data={data} //rendering from rechart lib
                    margin={{top: 10, bottom: 15}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/> 
                    <Legend />
                    <Line type="monotone" dataKey="new" stroke="#4314d8" />
                    <Line type="monotone" dataKey="closed" stroke="#20ca5d" />
                    <Line type="monotone" dataKey="active" stroke="#df84d8" />
                    <Line type="monotone" dataKey="lawyer" stroke="#ffb9cc" />
                </LineChart>
            </div> 
        </div>
    )
}
