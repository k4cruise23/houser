import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import routes from './route'



export default function App() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }


