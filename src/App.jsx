import React, {Component} from 'react';
import './App.css';
// import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard'
import Header from './Components/Header/Header'
import router from './route'



export default class App extends Component{
    render(){
        return (
            <div>

                <Header />
                <Wizard />
                {router}
            </div>
        )
    }
}


