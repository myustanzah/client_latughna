import ReduxThunk from 'redux-thunk'
import UserReducer from './userReducer'
import StudentReducer from './studentReducer'
import AreaReducer from './areaReducer'
import ObservationReducer from './observationReducer'
import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'


const reducer = combineReducers({
    UserReducer,
    StudentReducer,
    AreaReducer,
    ObservationReducer
})
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['UserReducer', 'StudentReducer', 'AreaReducer', 'ObservationReducer'],
    // blacklist: []
  }

const persistedReducer = persistReducer(persistConfig, reducer)

const middleware = applyMiddleware(ReduxThunk)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(middleware))
export const persistor = persistStore(store)