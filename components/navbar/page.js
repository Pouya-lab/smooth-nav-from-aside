"use client"
import Link from "next/link"
import "./nav.css"
import {FaBars , FaTimes} from 'react-icons/fa'
import { useState } from "react"

function Navbar() {

    const [ show , setShow ] = useState(false)

    const switchBurger = ()=>{
        setShow(!show)
    }
    console.log(show);

  return (
    <>
       <div className="main">
            <nav>
                <h3>Logo</h3>
                <div className="">
                    {/* logic for showing by clicking */}
                    <ul id="navbar" className={ show ? "#navbar active" : "#navbar"} >
                            <li><Link className="active" href='#' >Home</Link></li>
                            <li><Link href='#' >About</Link></li>
                            <li><Link href='#' >Contact</Link></li>
                           <li> <Link href='#' >Skills</Link></li>
                    </ul>
                </div>
                    
                <div id="mobile" onClick={switchBurger} >                    
                        { !show ? <FaBars/> : <FaTimes/> }
                    
                </div>
                
            </nav>
       </div>
    </>
  )
}

export default Navbar