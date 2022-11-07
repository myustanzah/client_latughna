import ReduxThunk from 'redux-thunk'
import UserReducer from './userReducer'
import StudentReducer from './studentReducer'
import AreaReducer from './areaReducer'
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'

const reducer = combineReducers({
    UserReducer,
    StudentReducer,
    AreaReducer
})

const middleware = applyMiddleware(ReduxThunk)

const store = createStore(reducer, middleware)

export default store