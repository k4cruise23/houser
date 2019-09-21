import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {UPDATE_STEP_ONE} from '../../store'

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
        const action = {
            type: UPDATE_STEP_ONE,
            payload: {...this.state}
        }
        store.dispatch(action)
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.name} />
                <input type="text" onChange={this.handleChange} value={this.state.address} />
                <input type="text" onChange={this.handleChange} value={this.state.city} />
                <input type="text" onChange={this.handleChange} value={this.state.state} />
                <input type="text" onChange={this.handleChange} value={this.state.zip} />
                <Link to='/wizard/step2' onClick={this.updateRedux} ><button>Next Step</button></Link>
            </div>
        )
    }

}

