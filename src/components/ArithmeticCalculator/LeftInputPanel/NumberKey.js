import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { appendExpressionString, setDecimalKeyPressed } from '../../../actions'

class NumberKey extends React.Component {
    constructor(props) {
        super(props)

        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    }

    buttonClickHandler() {
        const { expression, displayText, decimalUsed, appendExpressionString, setDecimalKeyPressed } = this.props

        var lastChar = expression.substr(expression.length - 1)

        // if last character in Mathematical Expression is ")", can't type a number or decimal point
        if (lastChar === ")"){
            return 
        }

        // If "." is clicked, Check to see that only 1 "." is used in a number 
        if (displayText === ".") {
            if (decimalUsed) {
                return;
            } else {
                setDecimalKeyPressed(true)
            }
        }
        appendExpressionString(displayText)
    }

    render() {
        const { classString, displayText } = this.props
        return (
            <div className={classString}>
                <button className="numbers" type="button" onClick={this.buttonClickHandler}>{displayText}</button>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        expression: state.expression.expressionStr,
        decimalUsed: state.expression.decimalUsed
    }),
    (dispatch) => bindActionCreators({ appendExpressionString, setDecimalKeyPressed }, dispatch)
)(NumberKey)