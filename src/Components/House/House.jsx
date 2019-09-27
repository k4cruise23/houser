import React, {Component} from 'react'

export default class House extends Component {
    render(){
        const {name, address, city, state, zip, img, mortgage, rent, id} = this.props.element
        // console.log(house)
        return(
            <div>
                <img src={img} alt='stuff' />
                <p>Property Name: {name} </p>
                <p>Address: {address} </p>
                <p>City: {city} </p>
                <p>State: {state} </p>
                <p>Zip: {zip} </p>
                <p>Monthly Mortgage: {mortgage} </p>
                <p>Desired Rent {rent}</p>
                <button onClick={() => this.props.deleteHouse(id)} ></button>
            </div>
        )
    }
}

  

