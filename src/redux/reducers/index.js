import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propertyReducer from './propertyReducer';
import reviewReducer from './reviewReducer';
import wishListReducer from './wishListReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    auth: authReducer,
    propertyReducer,
    reviewReducer,
    wishListReducer,
    modalReducer
});