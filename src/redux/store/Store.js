import {combineReducers} from 'redux';
import {createStore} from 'redux';
import { Reducers } from '../reducers/Reducers';
import {ReducersWishlist } from '../reducers/ReducersWishlist';

const routeReducers = combineReducers({
    Reducers,
    ReducersWishlist
})
export const store = createStore(routeReducers);