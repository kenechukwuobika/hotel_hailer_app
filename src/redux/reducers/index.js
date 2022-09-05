import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propertyReducer from './propertyReducer';
import reviewReducer from './reviewReducer';

export default combineReducers({
    auth: authReducer,
    propertyReducer,
    reviewReducer
});