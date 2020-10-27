import React, { useContext } from 'react';
import '../css/style.css'
import {CaseContext} from '../contexts/CaseContext';

export default function Chart() {

    //bring in the data object from the context file
    const {cases} = useContext(CaseContext);
    const {setData } = useContext(CaseContext);
    const { monthlyCases } = useContext(CaseContext);

    let currentMonth = 9; //set current month as october to filter the rendered data

    const handleChange = (e) => {
        let value = e.target.value;
        if(value === 'month'){
            setData(monthlyCases); //sets the monthlyCases object and renders it
        }else if(value === 'year'){
            setData(cases.filter(issue => typeof issue === 'object' && issue !== null))
        }else{
            setData(cases.filter(issue => 
                currentMonth - issue.id < 6 && !(currentMonth - issue.id < 0) //returns a new data from may to the current month
                )
            )
        }
    }

    return (
        <div className="container">
            <div className="form-group">
                <label>View by :</label>
                <select className="form-control" onChange={handleChange}>
                    <option value="year">This Year</option>
                    <option value="six">Last 6 Months</option>
                    <option value="month">This Month</option>
                </select>
            </div>
        </div>
    )
}
