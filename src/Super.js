import React from 'react';
import './App.css';
import CheckboxList2 from './Lista2';
import BottomNav from './barraBottom';
import TopNav2 from './barraTop2';

const Super = ()=> {
    return (
    <div className='NoDuermo'>
        
        <div className='TopNavegador'>
             <TopNav2 />
        </div>
                       
        <div className='Listas'>
             <CheckboxList2 />
        </div>

        <div className='Menu-abajo'>
             <BottomNav/>
        </div>
    </div>
        )
}

export default Super