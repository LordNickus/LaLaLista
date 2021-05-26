import React from 'react';
import './App.css';
import Lista1 from './Lista1';

const NoDuermoEn = ()=> {
    return (
        <div className='NoDuermo'>
           <img src='./logo512.png'alt='logo1' width='90px'height='90px'/>
            <div className='Subtitulos'>
                <h3>Lista no duermo en casa</h3>
            </div>
            <div>
                <Lista1 />
            </div>
        </div>
    )
}

export default NoDuermoEn