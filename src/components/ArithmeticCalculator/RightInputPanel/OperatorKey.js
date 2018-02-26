import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLastChar, isNumeric } from '../../../Util'
import { appendExpressionString, resetDecimalKeyPressed } from '../../../actions'

class OperatorKey extends React.Component {
    handleOperatorClick = () => {
        const { appendExpressionString, resetDecimalKeyPressed, displayText, expression } = this.props

        var lastExpressionChar = getLastChar(expression)

        // if previous character is number append operator
        if (isNumeric(lastExpressionChar) || lastExpressionChar === ")") {
            appendExpressionString(displayText)
            resetDecimalKeyPressed() // reset decimal point used
        }
    }

    render() {
        const { divClassStr, btnClassStr, displayText } = this.props
        return(
            <div className={divClassStr}>
                <button 
                    className={btnClassStr} 
                    type="button" 
                    onClick={this.handleOperatorClick}>
                    
                    {displayText}
                </button>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        expression: state.expression.expressionStr
    }),
    (dispatch) => bindActionCreators({ appendExpressionString, resetDecimalKeyPressed }, dispatch)
)(OperatorKey)