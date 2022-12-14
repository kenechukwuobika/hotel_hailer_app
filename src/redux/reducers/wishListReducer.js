const initialState = {
    isLoading: false,
    user: null,
    error: null,
    isSignedIn: false,
    userid: null
}

const wishListReducer = (state = {...initialState}, action) => {
    switch(action.type){
        case 'GET_SAVED_ITEMS':
            return {...state, savedItems: action.payload};
        case 'SAVE_ITEM':
            return {...state, savedItem: action.payload};
        default:
            return state;
    }
}

export default wishListReducer;