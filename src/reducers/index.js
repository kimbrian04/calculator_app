import { combineReducers } from 'redux'
import expression from './expression'
import menu from './menu'
import graphingCalculator from './graphingCalculator'

const rootReducer = combineReducers({
    expression,
    menu,
    graphingCalculator
})

export default rootReducer