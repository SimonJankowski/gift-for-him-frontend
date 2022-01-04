import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducer/cartReducer';
import { getProductDetailsReducer, getProductsReducer } from './reducer/productReducer';

const reducers = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer

})

const cartItemsInLocalStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const INITIAL_STATE = {
    cart: {
        cartItems: cartItemsInLocalStorage,
    },
};

const store = createStore(
    reducers,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store;