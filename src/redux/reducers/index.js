import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propertyReducer from './propertyReducer';
import reviewReducer from './reviewReducer';
import wishListReducer from './wishListReducer';
import modalReducer from './modalReducer';
import notificationReducer from './notificationReducer';
import bookingReducer from './bookingReducer';

export default combineReducers({
    auth: authReducer,
    propertyReducer,
    reviewReducer,
    wishListReducer,
    modalReducer,
    notificationReducer,
    bookingReducer
});