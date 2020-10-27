import React from 'react'
import '../css/style.css'

function StatBox(props) {
    return (
        <div className="card bg-light">
            <div className="card-body text-center">
                <p className="card-text">{props.text}</p>
                <h1>{props.value}</h1>
            </div>
        </div>
    )
}

export default StatBox
