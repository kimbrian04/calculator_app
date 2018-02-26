import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setExpressionString, setResult } from '../../../actions'

class DeleteKey extends React.Component {
    handleDeleteClick = () => {
        const { expression, setExpressionString, setResult } = this.props

        // Backspace => delete last character
        if (this.props.value === "backspace") {
            var newExpression = expression.substring(0, expression.length - 1)
            setExpressionString(newExpression)
            setResult("0")
        } 
        // Clear => clear whole expression
        else if (this.props.value === "clear") {
            setExpressionString("")
            setResult("0")
        }
    }

    render() {
        return (
            <button 
                className="delete-keys" 
                type="button" 
                onClick={this.handleDeleteClick}>
                
                {this.props.displayText}
            </button>
        )
    }
}

export default connect(
    (state) => ({
        expression: state.expression.expressionStr
    }),
    (dispatch) => bindActionCreators({ setExpressionString, setResult }, dispatch)
)(DeleteKey)