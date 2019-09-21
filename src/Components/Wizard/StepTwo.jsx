import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {UPDATE_STEP_TWO} from '../../store'


export default class StepTwo extends Component {
    constructor(){
        super()
        
        const reduxState = store.getState()

        this.state= {
            img: reduxState.img
        }
    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount = () => {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({img: reduxState.img})
        })
    }

    updateRedux = () => {
        const action = {
            type: UPDATE_STEP_TWO,
            payload: {...this.state}
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.img} />
                <Link to='/wizard/step1' onClick={this.updateRedux} ><button>Previous Step</button></Link>
                <Link to='/wizard/step3' onClick={this.updateRedux} ><button>Next Step</button></Link>
            </div>
        )
    }
}