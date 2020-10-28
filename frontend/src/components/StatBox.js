import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import '../css/style.css'

function StatBox(props) {

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
    })

    return (
        <div className="card card-body text-center" onClick={() => set(state => !state)}>
            <a.div className="">
                <p className="card-text">{props.text}<br/>
                    <span style={{fontSize:'smaller'}}>click to view</span>
                </p>
            </a.div>
            <a.div className="card-text" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                <h1>{props.value}</h1>
            </a.div>
        </div>
    )
}

export default StatBox
