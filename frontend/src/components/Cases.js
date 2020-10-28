import React, { useContext } from 'react'

import StatBox from './StatBox'
import '../css/style.css'
import {CaseContext} from '../contexts/CaseContext';

function Cases() {

    const {cases} = useContext(CaseContext); //bring in the data from the context
    
    let lawyers = [];
    function getLawyers(){ //function to get the number of lawyers
        cases.forEach(case_ => {
            if(typeof case_.lawyer === 'object' && case_.lawyer !== null){
                case_.lawyer.forEach(lawyer => {
                    if(lawyers.includes(lawyer)){
                        //pass
                    }else{
                        lawyers.push(lawyer)
                    }
                });
            }else{
                if(lawyers.includes(case_.lawyer)){
                    //pass
                }else{
                    lawyers.push(case_.lawyer)
                }
            }
        })
    }
    getLawyers() //triggers the fucntion to calculate the number of lawyers to be rendered

    let num_of_new_cases = 0
    let newCases = () => { //fucntion to count the number of new cases
        cases.forEach(case_ =>{
            num_of_new_cases += case_.new
        })
    }
    newCases() //triggers the fucntion to calculate the number of new cases to be rendered

    let active_cases = 0;
    let actives = () => {//function to calculate the number of active cases
        cases.forEach(case_ => active_cases += case_.active)
    }
    actives()//trigger function

    return (
        <div className="container">
            <main className="content">
                <StatBox text="Total Requests" value={active_cases + num_of_new_cases}/>
                <StatBox text="Cases in Progress" value={active_cases}/>
                <StatBox text="Lawyers Available" value={lawyers.length}/>
                <StatBox text="New Cases" value={num_of_new_cases}/>
                <StatBox text="Requests per Lawyer" value={active_cases/lawyers.length}/>
            </main>
        </div>
    )
}

export default Cases
