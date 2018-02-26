import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleMenuOptionClick } from '../../actions'

const MenuOption = (props) => {
    var selectedClassName = props.selectedMenu === props.value ? " selected-menu" : ""
    return (
        <button
            className={"menu-button" + selectedClassName}
            onClick={() => props.handleMenuOptionClick(props.value)}>
            
            {props.text}
        </button>
    )
}

export default connect(
    (state) => ({
        selectedMenu: state.menu.selectedMenu
    }),
    (dispatch) => bindActionCreators({ handleMenuOptionClick }, dispatch)
)(MenuOption)