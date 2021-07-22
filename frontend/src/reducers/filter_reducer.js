import {UPDATE_BOUNDS} from '../actions/filter_actions'
// const defaultState = {bounds: {searchText: "-1", category: "All"}}

const filterReducer = (state={bounds: {searchText: "-1", category: "All"}}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    newState.bounds = Object.assign({},state.bounds)
    switch(action.type){
        case UPDATE_BOUNDS: 
            newState.bounds = Object.assign({},action.bounds)
            return newState
        default:
            return state
    }
}

export default filterReducer