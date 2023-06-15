import React from 'react';
import './home.css';
import imgL from './logo.png';
import Header from './Components/Header';
import Window from './Components/Window';

const Home = () => {
    return (
        <div className='container'>
            <img src={imgL} alt='logo' height={80} width={250}>
            </img>
            <div className='box'>
                <Header/>
                <Window/>
            </div>
            
        </div>
    );
};

export default Home;