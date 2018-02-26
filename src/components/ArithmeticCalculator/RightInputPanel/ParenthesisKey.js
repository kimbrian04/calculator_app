import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLastChar, isNumeric } from '../../../Util'
import { appendExpressionString, resetDecimalKeyPressed } from '../../../actions'

class ParenthesisKey extends React.Component {
    constructor(props) {
        super(props)

        this.handleParenthesisClick = this.handleParenthesisClick.bind(this)
        this.handleOpenParenthesis = this.handleOpenParenthesis.bind(this)
        this.handleClosedParenthesis = this.handleClosedParenthesis.bind(this)
    }

    handleParenthesisClick() {
        const { displayText } = this.props

        var lastExpressionChar = getLastChar(this.props.expression)

        if (displayText === "("){
            this.handleOpenParenthesis(lastExpressionChar, displayText)
        } else {
            this.handleClosedParenthesis(lastExpressionChar, displayText)
        }
    }

    handleOpenParenthesis(lastExpressionChar, displayText) {
        const { appendExpressionString, resetDecimalKeyPressed } = this.props

        // if last char in expression is numeric or ), can't open parenthesis
        if (!isNumeric(lastExpressionChar) && lastExpressionChar !== ")") { 
            appendExpressionString(displayText)
            resetDecimalKeyPressed()
        }
    }

    handleClosedParenthesis(lastExpressionChar, displayText) {
        const { appendExpressionString, resetDecimalKeyPressed } = this.props

        // if last char in expression is numeric or ), can close parenthesis
        if (isNumeric(lastExpressionChar) || lastExpressionChar === ")") { 
            appendExpressionString(displayText)
            resetDecimalKeyPressed()
        }
    }

    render() {
        const { divClassStr, btnClassStr, displayText } = this.props
        return(
            <div className={divClassStr}>
                <button className={btnClassStr} type="button" onClick={this.handleParenthesisClick}>{displayText}</button>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        expression: state.expression.expressionStr
    }),
    (dispatch) => bindActionCreators({ appendExpressionString, resetDecimalKeyPressed }, dispatch)
)(ParenthesisKey)