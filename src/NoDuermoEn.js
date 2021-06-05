import React from 'react';
import './App.css';
import CheckboxList1 from './Lista1';
import BottomNav from './barraBottom';
import TopNav from './barraTop';

const NoDuermoEn = ()=> {
    return (
    <div className='NoDuermo'>
        
        <div className='TopNavegador'>
             <TopNav />
        </div>
                       
        <div className='Listas'>
             <CheckboxList1 />
        </div>

        <div className='Menu-abajo'>
             <BottomNav/>
        </div>
    </div>
        )
}

export default NoDuermoEn