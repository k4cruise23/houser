import React, {Component} from 'react'
import House from '../House/House'
import axios from 'axios'

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        axios.get('/api/houses').then(res => {
            this.setState({houses: res.data})
        })
    }

    render(){
        
        return(
            <div>
                {this.state.houses.length ? this.state.houses.map(element => {
                    return (
                        <div key={element.house_id} >
                            <h3>{element.property_name}</h3>
                            <h3>{element.address}</h3>
                            <h3>{element.city}</h3>
                            <h3>{element.state}</h3>
                            <h3>{element.zip}</h3>
                        </div>
                    )
                }) : null}
                Dashboard
                <button>Add New Property</button>
                <House />
            </div>
        )
    }
}