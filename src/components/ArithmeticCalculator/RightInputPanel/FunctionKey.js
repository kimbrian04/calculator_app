import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLastChar, isNumeric } from '../../../Util'
import { appendExpressionString, resetDecimalKeyPressed } from '../../../actions'

class FunctionKey extends React.Component {
    handleOperatorClick = () => {
        const { appendExpressionString, resetDecimalKeyPressed, value } = this.props
        
        var lastExpressionChar = getLastChar(this.props.expression)

        // if previous character is an operator (except for close parenthesis) append function
        if (!isNumeric(lastExpressionChar) && lastExpressionChar !== ")") {
            appendExpressionString(value)
            resetDecimalKeyPressed() // reset decimal point used
        }
    }

    render() {
        const { divClassStr, btnClassStr, displayText } = this.props
        return(
            <div className={divClassStr}>
                <button className={btnClassStr} type="button" onClick={this.handleOperatorClick}>{displayText}</button>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        expression: state.expression.expressionStr
    }),
    (dispatch) => bindActionCreators({ appendExpressionString, resetDecimalKeyPressed }, dispatch)
)(FunctionKey)