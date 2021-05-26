import React from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {Box, Grid} from '@material-ui/core';
import './App.css';

const Home = ()=> {
    return (
        <div className='App-Home'>
            <div>
                <img src='./logo512.png'alt='logo1'/>
                <div className="Botones-inicio">
                <Button variant="contained" color="secondary">
                    <Link to='/NoDuermoEn'>Lista no duermo en casa</Link>
                 </Button>
                 <br/>
                 <Button variant="contained" color="secondary">
                    <Link to=''>Proximamenteeeee!!!</Link>
                 </Button>
                 <br/>
                 <Button variant="contained" color="secondary">
                    <Link to=''>Proximamenteeeee!!!</Link>
                 </Button>
                 <br/>
                 <Button variant="contained" color="secondary">
                    <Link to=''>Proximamenteeeee!!!</Link>
                 </Button>
                 </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Home