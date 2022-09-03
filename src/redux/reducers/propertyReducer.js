const initialState = {
    isLoading: false,
    user: null,
    error: null,
    isSignedIn: false,
    userid: null
}

const propertyReducer = (state = {...initialState}, action) => {
    switch(action.type){
        case 'GET_NEARBY_PROPERTIES':
            return {...state, nearbyProperties: action.payload};
        case 'GET_ONE_PROPERTY':
            return {...state, property: action.payload};
        case 'SHOW_LOADING':
            return {...state, isLoading: true};
        case 'CLEAR_LOADING':
            return {...state, isLoading: false};
        default:
            return state;
    }
}

export default propertyReducer;