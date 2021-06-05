import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
  } from 'react-router-dom';

import Home from './Home';
import NoDuermoEn from './NoDuermoEn';
import Super from './Super'

function App() {
  return(
      <Router>
         <Switch>
         <Route path="/NoDuermoEn">
              <NoDuermoEn />
          </Route>
          <Route path="/Super">
              <Super />
          </Route>
          <Route path="/">
              <Home />
          </Route>
          
          {/* <Route path="/Secciones/Tradicional">
              <Tradicional />
          </Route>
          
          

          <Route path="/Secciones/Administracion">
              <Administracion />
          </Route>

          <Route path="/Secciones/Visitante">
              <Visitante />    
          </Route>

          <Route path="/Secciones/Usuario">
              <Usuario />
          </Route>
         
          <Route path="/">
              <Initial />
          </Route> */}

         </Switch>
      </Router>

      
  );
}

export default App;
