import React, {Component} from 'react'

export default class Wizard extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    cancelButton = () => {
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        })
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.valur})
    }

    render(){
        return (
            <div>
                Add New Listing
                <button>Cancel</button>
                Property Name
                <input type="text" />
                Address
                <input type="text"/>
                City
                <input type="text"/>
                State
                <input type="text"/>
                Zip
                <input type="text"/>
                <button>Cancel</button>
            </div>
        )
    }
}