import {combineReducers} from 'redux';
import {createStore} from 'redux';
import { Reducers } from '../reducers/Reducers';
import {ReducersWishlist } from '../reducers/ReducersWishlist';
import {AddressReducers} from '../reducers/AddressReducers';

const routeReducers = combineReducers({
    Reducers,
    ReducersWishlist,
    AddressReducers
})
export const store = createStore(routeReducers);