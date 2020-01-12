import { combineReducers } from 'redux'

import todolist from './todolist'
import jxtest from './jxtest'

const reducer = combineReducers({
    todolist,
    jxtest
})

export default reducer