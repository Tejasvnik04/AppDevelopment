import {createStore, combileReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducer= combileReducers({

});
const intialState={};
const middleware=[thunk];
const Store = createStore(
    reducer,
    intialState,
    applyMiddleware(...middleware)
); 
export default Store;