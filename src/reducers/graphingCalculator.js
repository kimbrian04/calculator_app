import * as CONST from '../Constants'

const initState = {
    function: "",
    yStart: -10,
    yEnd: 10,
    xStart: -10,
    xEnd: 10,
    dataPoint: [],
    errorMessage: "",
    isError: false
}

const graphingCalculator = 
    (state = initState, action) => {
        switch(action.type) {
            case CONST.SET_FUNCTION_STRING:
                return Object.assign({}, state, { function: action.payload })
            case CONST.SET_X_START:
                return Object.assign({}, state, { xStart: action.payload })
            case CONST.SET_X_END:
                return Object.assign({}, state, { xEnd: action.payload })
            case CONST.SET_Y_START:
                return Object.assign({}, state, { yStart: action.payload })
            case CONST.SET_Y_END:
                return Object.assign({}, state, { yEnd: action.payload })
            case CONST.SET_DATA_POINTS: 
                return Object.assign({}, state, { dataPoint: action.payload })
            case CONST.SET_GRAPHING_ERROR:
                return Object.assign({}, state, { isError: action.payload })
            case CONST.SET_GRAPHING_ERROR_MESSAGE:
                return Object.assign({}, state, { errorMessage: action.payload })
            default: 
                return state
        }
    }

export default graphingCalculator