const initialState = {
    displayModal: false,
    modalType: "keiks"
}

const modalReducer = (state = {...initialState}, action) => {
    switch(action.type){
        case 'SHOW_MODAL':
            return { ...state, displayModal: true, modalType: action.payload };
        case 'HIDE_MODAL':
            return { ...state, displayModal: false, modalType: null };
        default:
            return state;
    }
}

export default modalReducer;