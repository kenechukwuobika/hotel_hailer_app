const initialState = {
    isLoading: false,
    user: null,
    error: null,
    isSignedIn: false,
    userid: null
}

const authReducer = (state = {...initialState}, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {...state, user: action.payload, isSignedIn: true};
        case 'SIGN_IN_ERROR':
            return {...state, isLoading: false, error: action.payload};
        case 'SHOW_LOADING':
            return {...state, isLoading: true};
        case 'SIGN_OUT':
            return {...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
}

export default authReducer;