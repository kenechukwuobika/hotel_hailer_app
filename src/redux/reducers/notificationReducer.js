const initialState = {
    isLoading: false,
    error: null,
    notifications: []
}

const notificationReducer = (state = {...initialState}, action) => {
    switch(action.type){
        case 'GET_NOTIFICATIONS':
            return {...state, notifications: action.payload};
        default:
            return state;
    }
}

export default notificationReducer;