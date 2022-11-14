import ReduxThunk from 'redux-thunk'
import UserReducer from './userReducer'
import StudentReducer from './studentReducer'
import AreaReducer from './areaReducer'
import ObservationReducer from './observationReducer'
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'

const reducer = combineReducers({
    UserReducer,
    StudentReducer,
    AreaReducer,
    ObservationReducer
})

const middleware = applyMiddleware(ReduxThunk)

const store = createStore(reducer, middleware)

export default store