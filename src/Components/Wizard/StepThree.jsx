import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store, {UPDATE_MORTGAGE, UPDATE_RENT} from '../../store'

export default class StepThree extends Component{
    constructor(){
        super()
        
        const reduxState = store.getState()
        const {name, address, city, state, zip, img, mortgage, rent} = reduxState

        this.state = {name, address, city, state, zip, img, mortgage, rent}
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const reduxState = store.getState()
            const {name, address, city, state, zip, img, mortgage, rent} = reduxState
            this.setState({name, address, city, state, zip, img, mortgage, rent})
        })
    }


    addHouse = () => {
        // const body = {...store.getState(), ...this.state}
        axios.post('/api/houses', this.state).then(res => console.log(res.data))
}

    updateRedux = () => {
        store.dispatch({
            type: UPDATE_MORTGAGE,
            payload: this.state.mortgage
        })
        store.dispatch({
            type: UPDATE_RENT,
            payload: this.state.rent
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return (
            <div className='parent'>
            <div className='dashboard'>
                <p>Recommended rent {1.25 * +this.state.mortgage}</p>
                <input type="text" value={this.state.mortgage} onChange={this.handleChange} name='mortgage' />
                <input type="text" value={this.state.rent} onChange={this.handleChange} name='rent' />
                <div className='nextandprevious'>
                <Link to='/wizard/step2' onClick={this.updateRedux} ><button>Wingardium Leviosa</button></Link>
                <Link to='/' onClick={this.addHouse} ><button>Complete</button></Link>
                </div>
            </div>
            </div>
        )
    }

}
    