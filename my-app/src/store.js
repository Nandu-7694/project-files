
import {configureStore} from "@reduxjs/toolkit"
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer'
const middleWare=[thunk]


export const store = configureStore({
    reducer:{reducer:reducer}
    // composeWithDevTools(applyMiddleware(...middleWare))
}
    )


// export default  store;
