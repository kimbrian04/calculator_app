import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setExpressionString, setResult } from '../../actions'
import { calculateMathematicalExpression } from '../../Util'

class ExpressionInput extends React.Component {
    changeHandler = (evt) => {
        var newExpression = evt.target.value
        //var enteredKey = newExpression.substr(newExpression.length - 1)

        // don't allow alphabets or certain symbols to be typed
        if (newExpression.match(/[a-pu-z|/_/=/?/'/"/;/:/%/$/#/@/!/~/`/[/{/}//&/\\]]/i)){
            return
        }

        // To Do: Handle wrong input
        this.props.setExpressionString(newExpression)
    } 

    handleKeyPress = (evt) => {
        var key = evt.key
        
        if (key === "Enter") {
            var result = calculateMathematicalExpression(this.props.expression)
            this.props.setResult(result.value)

            if (!result.isError) { 
                this.props.setExpressionString(result.value)
            }
        }
    }

    render() {
        const { expression } = this.props
        return (
            <input 
                ref={this.props.expressionRef}
                type="text" 
                value={expression} 
                onChange={this.changeHandler}
                onKeyPress={this.handleKeyPress}
                placeholder="Enter Mathematical Equation" />
        )
    }
}

export default connect(
    (state) => ({
        expression: state.expression.expressionStr
    }),
    (dispatch) => bindActionCreators({ setExpressionString, setResult }, dispatch)
)(ExpressionInput)