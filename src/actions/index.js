import * as CONST from '../Constants'

export function setExpressionString(str) {
    return { type: CONST.SET_EXPRESSION_STRING, payload: str }
}

export function appendExpressionString(char) {
    return { type: CONST.APPEND_EXPRESSION_STRING, payload:char }
}

export function resetDecimalKeyPressed() {
    return { type: CONST.RESET_DECIMAL_KEY_USED, payload: false}
}

export function setDecimalKeyPressed(val) {
    return { type: CONST.SET_DECIMAL_KEY_USED, payload: val }
}

export function setResult(result) {
    return { type: CONST.SET_RESULT, payload: result }
}

export function handleMenuOptionClick(menuOption) {
    return { type: CONST.SET_SELECTED_MENU, payload: menuOption }
}

export function setGraphingFunctionString(str) {
    return { type: CONST.SET_FUNCTION_STRING, payload: str}
}

export function setXAxisStart(val) {
    return { type: CONST.SET_X_START, payload: parseFloat(val) }
}

export function setXAxisEnd(val) {
    return { type: CONST.SET_X_END, payload: parseFloat(val) }
}

export function setYAxisStart(val) {
    return { type: CONST.SET_Y_START, payload: parseFloat(val) }
}

export function setYAxisEnd(val) {
    return { type: CONST.SET_Y_END, payload: parseFloat(val)}
}

export function setDataPoint(arr) {
    return { type: CONST.SET_DATA_POINTS, payload: arr }
}

export function setGraphingError(val) {
    return { type: CONST.SET_GRAPHING_ERROR, payload: val }
}

export function setGrpahingErrorMessage(message) {
    return { type: CONST.SET_GRAPHING_ERROR_MESSAGE, payload: message }
}