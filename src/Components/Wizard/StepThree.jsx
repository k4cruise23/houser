import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store, {UPDATE_STEP_THREE} from '../../store'

export default class StepThree extends Component{
    constructor(){
        super()
        
        const {mortgage, rent} = store.getState()

        this.state = {mortgage, rent}
    }

    componentDidMount = () => {
        store.subcribe(() => {
            const {mortgage, rent} = store.getState()
            this.setState({mortgage, rent})
        })
    }

    addHouse = () => {
        const body = {...store.getState(), ...this.state}
        axios.post('/api/houses', body).then(() => {})
}

    updateRedux = () => {
        const action = {
            type: UPDATE_STEP_THREE,
            payload: {...this.state}
        }
        store.dispatch(action)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (
            <div>
                <p>Recommended rent {1.25 * +this.state.mortgage}</p>
                <input type="text" value={this.state.mortgage} onChange={this.handleChange} />
                <input type="text" value={this.state.rent} onChange={this.handleChange} />
                <Link to='/wizard/step2' onClick={this.updateRedux} ><button>Previos Step</button></Link>
                <Link to='/' onClick={this.addHouse} ><button>Complete</button></Link>
            </div>
        )
    }

}
    