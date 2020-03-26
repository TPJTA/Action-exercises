import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReduer from './reduer'
export default createStore(rootReduer,applyMiddleware(thunk))