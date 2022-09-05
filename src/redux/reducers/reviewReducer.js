const initialState = {
    isLoading: false,
    user: null,
    error: null,
    isSignedIn: false,
    userid: null
}

const reviewReducer = (state = {...initialState}, action) => {
    switch(action.type){
        case 'GET_REVIEWS':
            return {...state, reviews: action.payload};
        case 'GET_PROPERTY_REVIEWS':
            return {...state, reviews: action.payload};
        case 'SHOW_LOADING':
            return {...state, isLoading: true};
        case 'CLEAR_LOADING':
            return {...state, isLoading: false};
        default:
            return state;
    }
}

export default reviewReducer;