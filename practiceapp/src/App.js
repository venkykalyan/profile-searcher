import React from 'react';
import Navbar from './components/navbar'
import './App.css'

import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/home'
import Login from './components/screens/login'
import Signup from './components/screens/signup'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      
      <Route exact path="/"><Home /></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/signup"><Signup /></Route>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
