import * as CONST from '../Constants'

const initState = {
    expressionStr: "",
    rpnString: "",
    operatorStack: [],
    decimalUsed: false,
    result: 0
}

const expression = 
    (state = initState, action) => {
        switch(action.type) {
            case CONST.SET_EXPRESSION_STRING:
                return Object.assign({}, state, { expressionStr: action.payload })
            case CONST.APPEND_EXPRESSION_STRING:
                return Object.assign({}, state, { expressionStr: state.expressionStr + action.payload })
            case CONST.RESET_DECIMAL_KEY_USED:
            case CONST.SET_DECIMAL_KEY_USED:
                return Object.assign({}, state, { decimalUsed: action.payload })
            case CONST.SET_RESULT:
                return Object.assign({}, state, { result: action.payload })   
            default: 
                return state
        }
    }

export default expression