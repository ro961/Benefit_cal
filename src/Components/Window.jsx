import React from 'react';
import '../home.css'
import star from '../images/hotstar.jpg';
import disc from '../images/discovery-logo-box.png'
import uc from '../images/uc-logo-box.png';
import { useState } from 'react';

const Window = () => {
    const [saving,setSavings] = useState(0);
    const [selectedOffers,setOffers] = useState([]);
    const [border,setBorder] = useState([]);
    const [count,setCount] = useState(0);

    const handleClick = (value) =>{
        
        if(selectedOffers.includes(value)){                                                    //Changes the value of the saving state as per the offers clicked and displays the total savings
            const updatedOffers = selectedOffers.filter((div) => div !== value);        
            setOffers(updatedOffers);
            setSavings(saving - value);
            setCount(count - 1);

            
        }
        else{
            const updatedOffers = [...selectedOffers,value];
            setOffers(updatedOffers);
            setSavings(saving + value);
            setCount(count + 1);
            
            
        }
    }
    const borderClick = (index) => {                        //Stores the offers clicked in an array and highlights the border of the specific offer when clicked and goes back to normal when clicked again
        setBorder((prevHighlighted) => {
            if (prevHighlighted.includes(index)) {
              return prevHighlighted.filter((item) => item !== index);
            } else {              
                return [...prevHighlighted, index]; 

        
    }})

};

    return (
        <>
        <div className='window'>
            <div onClick={()=>{handleClick(100);borderClick(1);}} className={`card ${border.includes(1) ? 'highlighted' : ''}`}  >
                <img className='imgcard' src={star} alt='' ></img>
                <label className='desc'>6 months Disney+ hotstar subscription
                <span className='desctext'>Worth $100, you pay $0</span>
                </label>
            </div>
            <div onClick={()=>{handleClick(200);borderClick(2);}} className={`card ${border.includes(2) ? 'highlighted' : ''}`} >
                <img className='imgcard' src={disc} alt='' ></img>
                <label className='desc'>3 months Discovery+ Offer
                <span className='desctext'>Worth $200, you pay $0</span>
                </label>
            </div>
            <div onClick={()=>{handleClick(300);borderClick(3);}} className={`card ${border.includes(3) ? 'highlighted' : ''}`}  >
                <img className='imgcard' src={uc} alt='' ></img>
                <label className='desc'> 5 months UrbanClap Premium
                <span className='desctext'>Savings upto $300</span>
                </label>
            </div>
            <div onClick={()=>{handleClick(400);borderClick(4);}} className={`card ${border.includes(4) ? 'highlighted' : ''}`}>
                <img className='imgcard' src={disc} alt='' ></img>
                <label className='desc'>3 months Discovery+ Offer
                <span className='desctext'>Savings upto $400</span>
                </label>
            </div>
            <div onClick={()=>{handleClick(500);borderClick(5);}} className={`card ${border.includes(5) ? 'highlighted' : ''}`}>
                <img className='imgcard' src={uc} alt='' ></img>
                <label className='desc'>5 months UrbanClap Premium
                <span className='desctext'>Savings upto $500</span>
                </label>
            </div>
            <div onClick={()=>{handleClick(600);borderClick(6);}} className={`card ${border.includes(6) ? 'highlighted' : ''}`}>
                <img className='imgcard' src={star} alt='' ></img>
                <label className='desc'>6 months Disney+ hotstar subscription
                <span className='desctext'>Savings upto $600</span>
                </label>
            </div>
            <div onClick={()=>{handleClick(700);borderClick(7);}} className={`card ${border.includes(7) ? 'highlighted' : ''}`}>
                <img className='imgcard' src={disc} alt='' ></img>
                <label className='desc'>3 months Discovery+ Offer
                <span className='desctext'>Savings upto $700</span>
                </label>
            </div>
            <div onClick={()=>{handleClick(800);borderClick(8);}} className={`card ${border.includes(8) ? 'highlighted' : ''}`}>
                <img className='imgcard' src={uc} alt='' ></img>
                <label className='desc'>5 months UrbanClap Premium
                <span className='desctext'>Savings upto $800</span>
                </label>
            </div>
            <div onClick={()=>{handleClick(900);borderClick(9);}} className={`card ${border.includes(9) ? 'highlighted' : ''}`}>
                <img className='imgcard' src={star} alt='' ></img>
                <label className='desc'>6 months Disney+ hotstar subscription
                <span className='desctext'>Savings upto $900</span>
                </label>
            </div>
            <div onClick={()=>{handleClick(1000);borderClick(10);}} className={`card ${border.includes(10) ? 'highlighted' : ''}`}>
                <img className='imgcard' src={uc} alt='' ></img>
                <label className='desc'>5 months UrbanClap Premium
                <span className='desctext'>Savings upto $1000</span>
                </label>
            </div>
            <div onClick={()=>{handleClick(1100);borderClick(11);}} className={`card ${border.includes(11) ? 'highlighted' : ''}`}>
                <img className='imgcard' src={disc} alt='' ></img>
                <label className='desc'>3 months Discovery+ Offer
                <span className='desctext'>Savings upto $1100</span>
                </label>
            </div>
    
            
           
        </div>
        <div className='bot'>
            <div className='count'>
            <text className='es'>Estimated Savings</text>
            <span className='benefits'>
                {count}/11 benefits selected</span>
            <h3 className='cash'>${saving}</h3>
            </div>
            <button className='but'>Join Prime at 1999</button>
        </div>
        </>
    );
};

export default Window;