import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP} from '../../store'

export default class StepOne extends Component {
    constructor(){
        super()

        const reduxState = store.getState()
        const {name, address, city, state, zip} = reduxState

        this.state = {name, address, city, state, zip}
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const {name, address, city, state, zip} = store.getState
            this.setState({name, address, city, state, zip})
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    updateRedux = () => {
        store.dispatch({
            type: UPDATE_NAME,
            payload: this.state.name
        })
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: this.state.address
        })
        store.dispatch({
            type: UPDATE_CITY,
            payload: this.state.city
        })
        store.dispatch({
            type: UPDATE_STATE,
            payload: this.state.state
        })
        store.dispatch({
            type: UPDATE_ZIP,
            payload: this.state.zip
        })
    }

    render(){
        return (
        
            <div className="parent">
            <div className='dashboard'>
                <label>Property Name</label>
                <input type="text" onChange={this.handleChange} value={this.state.name} name='name'/>
                <label>Address</label>
                <input type="text" onChange={this.handleChange} value={this.state.address} name='address' />
                <label>City</label>
                <input type="text" onChange={this.handleChange} value={this.state.city} name='city' />
                <label>State</label>
                <input type="text" onChange={this.handleChange} value={this.state.state} name='state' />
                <label>Zip</label>
                <input type="text" onChange={this.handleChange} value={this.state.zip} name='zip' />
                <Link to='/wizard/step2' onClick={this.updateRedux} ><button>Next Step</button></Link>
            </div>
            </div>
        )
    }

}

