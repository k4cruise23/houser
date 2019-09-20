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
                <button>Complete</button>
            </div>
        )
    }
}