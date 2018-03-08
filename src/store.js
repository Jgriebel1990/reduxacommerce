import { createStore, combineReducers } from 'redux';
import productReducer from './products'
import cartReducer from './cart'
import searchReducer from './search'

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    search: searchReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;