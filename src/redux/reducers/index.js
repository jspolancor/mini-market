import {combineReducers} from 'redux';

import cartReducer from './cartReducer/cartReducerReducer';
import storeReducer from './storeReducer/storeReducerReducer';

export default combineReducers({
    cartReducer,
    storeReducer
});