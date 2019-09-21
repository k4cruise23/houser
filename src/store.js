import {createStore} from 'redux'

const initalState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    mortgage: '',
    rent: ''
}

export const UPDATE_STEP_ONE = 'UPDATE_STEP_ONE'

const reducer = (state = initalState, action) => {
    const {payload, type} = action

    switch (type) {
        case UPDATE_STEP_ONE:
            return Object.assign({}, state, payload)

        default:
            return state
    }
}



export default createStore(reducer)