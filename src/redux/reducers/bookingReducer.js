const initialState = {
    isLoading: false,
    error: null,
    bookings: []
}

const bookingReducer = (state = {...initialState}, action) => {
    switch(action.type){
        case 'GET_BOOKINGS':
            return {...state, bookings: action.payload};
        case 'GET_ONE_BOOKING':
            return {...state, booking: action.payload};
        case 'CLEAR_ONE_BOOKING':
            return {...state, booking: null};
        default:
            return state;
    }
}

export default bookingReducer;