import React from 'react';
import './App.css';

import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './App.css';

const Home = ()=> {
    return (
        <div className='App-Home'>
            <div>
                <img src='./logo512.png'alt='logo1'/>
                <h6>Version 1.01</h6>
                <div className="Botones-inicio">
                <Button variant="contained" color="primary">
                    <Link to='/NoDuermoEn'>Lista no duermo en casa</Link>
                 </Button>
                 <br/>
                 <Button variant="contained" color="secondary">
                    <Link to='/Super'>Dentro de poco... Lista Super!</Link>
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
            {/* <div>
                
            </div> */}
        </div>
    )
}

export default Home
