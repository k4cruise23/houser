import React from 'react';
import './App.css';

import Header from './Components/Header/Header'
import {Link, Switch, Route} from 'react-router-dom'
import router from './route'



export default function App() {
    return (
      <div className="App">
        <Header />
        {router}
      </div>
    );
  }


