import React, {Component} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import store, {CANCEL} from '../../store'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'


export default class Wizard extends Component{
    // constructor(){
    //     super()

    //     this.state = {
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zipcode: ''
    //     }
    // }

    // cancelButton = () => {
    //     this.setState({
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zipcode: ''
    //     })
    // }

    cancelButton = () => {
        store.dispatch({type: CANCEL})
    }

    // handleChange = e => {
    //     this.setState({[e.target.name]: e.target.valur})
    // }

    render(){
        return (
            <div>
                <h1>Add NewListing</h1>
                <Link to='/' onClick={this.cancelButton} ><button>Cancel</button></Link>
                <Switch>
                    <Route path='/wizard/step1' component={StepOne} />
                    <Route path='/wizard/step2' component={StepTwo} />
                    <Route path='/wizard/step3' component={StepThree} />
                </Switch>
            </div>
        )
    }
}