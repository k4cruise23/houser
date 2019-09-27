import {createStore} from 'redux'

export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_STATE = 'UPDATE_STATE'
export const UPDATE_ZIP = 'UPDATE_ZIP'
export const UPDATE_IMG = 'UPDATE_IMG'
export const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
export const UPDATE_RENT ='UPDATE_RENT'
export const CANCEL = 'CANCEL'


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


const reducer = (state = initalState, action) => {
    const {payload, type} = action

    switch (type) {
        case UPDATE_NAME:
            return {...state, name: payload}
        case UPDATE_ADDRESS:
            return {...state, address: payload}
        case UPDATE_CITY:
            return {...state, city: payload}
        case UPDATE_STATE:
            return {...state, state: payload}
        case UPDATE_ZIP:
            return {...state, zip: payload}
        case UPDATE_IMG:
            return {...state, img: payload}
        case UPDATE_MORTGAGE:
            return {...state, mortgage: payload}
        case UPDATE_RENT:
            return {...state, rent: payload}
        case CANCEL:
            const newState = {
                name: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                img: '',
                mortgage: '',
                rent: ''
            }
            return {...newState}
        default:
            return state
    }
}


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store