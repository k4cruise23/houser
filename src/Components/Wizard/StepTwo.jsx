import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {UPDATE_IMG} from '../../store'


export default class StepTwo extends Component {
    constructor(){
        super()
        
        const reduxState = store.getState()
        const {img} = reduxState
        this.state= {img}
    }


    handleChange = (key, e) => {
        this.setState({[key]: e.target.value})
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const {img} = store.getState
            this.setState({img})
        })
    }

    updateRedux = () => {
        const action = {
            type: UPDATE_IMG,
            payload: this.state.img
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div className='parent'>
            <div className='dashboard'>
                <label>Image URL</label>
                <input type="text" onChange={e => this.handleChange('img', e)} value={this.state.img} name='image' />
                <div className="nextandprevious">
                <Link to='/wizard/step1' onClick={this.updateRedux} ><button>Previous Step</button></Link>
                <Link to='/wizard/step3' onClick={this.updateRedux} ><button>Next Step</button></Link>
                </div>
            </div>
            </div>
        )
    }
}