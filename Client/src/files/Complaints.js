import React from 'react'
// import Navbarr from '../components/Navbarr';
// import propTypes from 'prop-types'
import './ComplaintStyles.css';
// import ganga1 from "../components/ganga1.jpg";

function Complaints(){
    return(
        <>
        <div className='wrap'>
            <header>
                <h2 className="logo" >
                    {/* <img src={ganga1} className='img2'/> */}
                </h2>
            </header>
            <div className="wrapper">
                <div className="form-box login">
                    <h2>What's Your Problem?</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"></span>
                            <input type="text" required placeholder='You are known as...'/>
                        </div>
                        <div className="input-box">
                            <span className="icon"></span>
                            <input type="number" required placeholder='Your Room Number?'/>
                        </div>
                        <div className="input-box">
                            <span className="icon"></span>
                            <input type="number" required placeholder='Your Roll Number?'/>
                        </div>
                        <div className="input-box">
                            <span className="icon"></span>
                            <input type="tel" name="phone" className='phone'  required placeholder='You can be contacted through..'/>
                        </div>
                        <div className="issue">
                            <span className="icon"></span>
                            <input type="text" maxLength={40} required placeholder='Problem...'/>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}
export default Complaints;