import React from 'react'
import logo from '../img/logo.png'
import menu from '../img/menu.png'
import '../css/style.css'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="myLawLegal Logo"/>
                <h5>Lawyer Dashboard</h5>
                <div className="menu ml-auto">
                    <img src={menu} alt="Menu key"/>
                </div>  
            </div>  
        </header>
    )
}
