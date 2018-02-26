import * as CONST from '../Constants'

const initState = {
    selectedMenu: "arith" //initially show arithmetic calculator
}

const menu = 
    (state = initState, action) => {
        switch(action.type) {
            case CONST.SET_SELECTED_MENU:
                return Object.assign({}, state, { selectedMenu: action.payload })
            default: 
                return state
        }
    }

export default menu