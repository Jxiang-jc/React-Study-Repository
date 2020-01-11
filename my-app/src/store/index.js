import { createStore, applyMiddleware } from 'redux'

// 异步
import thunk from 'redux-thunk'

import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(thunk))

export default store