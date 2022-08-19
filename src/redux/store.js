import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import reducer from './reducers';

export default store = configureStore({
    reducer,
    middleware: [thunk]
})