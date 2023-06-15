import React from 'react';
import '../home.css'
import {AiOutlineCheckCircle} from 'react-icons/ai';
const Header = () => {
    return (
        <div>
            <h1 className='head'>Estimate your Savings</h1>
            <div className='texts'>
            <h3 className='text'><AiOutlineCheckCircle/> Tap to choose the benefits you plan to use</h3>
            <h3 className='text'><AiOutlineCheckCircle/> See how much you have saved!</h3></div>
        </div>
    );
};

export default Header;