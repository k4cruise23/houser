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
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    
    componentDidMount = () => {
        this.getHouses()
    }
    
    
    getHouses = () => {
        axios.get('/api/houses').then( res => {
            this.setState({houses: res.data})
            // console.log('hit')
        })
    }
    
    // componentDidMount(){
    //     console.log('hit')
    //     axios.get('/api/houses').then(res => {
    //         this.setState({houses: res.data})
    //         console.log(res.data)
    //     })
    // }


    deleteHouse(id){
        axios.delete(`/api/houses/${id}`).then(res => {
            this.getHouses()
        })
    }

    render(){
        const mappedHouses = this.state.houses.map((element, index) => {
            return (<House key={index} element={element} deleteHouse={this.deleteHouse} />)
        })
        return(
            <div className="parent">
            <div className='dashboard'>
                <div className="dash">
                <h1>Dashboard</h1>
                <Link to='/wizard/step1'> <button className='addnewprop' >Add New Property</button> </Link>
                </div>
                <div className="line"></div>
                <h1 className='homelistings' >Home Listings</h1>
                {mappedHouses}
            </div>
            </div>
        )
    }
}

