import React, {Component} from 'react'
import House from '../House/House'
import axios from 'axios'
import {Link} from 'react-router-dom'

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

    deleteHouse(id){
        axios.delete(`/api/house/${id}`).then(res => {
            this.componentDidMount()
        })
    }

    render(){
        const mappedHouses = this.state.houses.map((element, index) => {
            return (<House key={index} house={element}  />)
        })
        return(
            <div>
                <h1>Dashboard</h1>
                <button>Add New Property</button>
                <Link to='/wizard' > <button>Add New Property</button> </Link>
                {mappedHouses}
            </div>
        )
    }
}

