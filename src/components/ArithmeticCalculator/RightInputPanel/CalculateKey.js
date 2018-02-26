import React from 'react'
import { calculateMathematicalExpression } from '../../../Util'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setResult, setExpressionString } from '../../../actions'

class CalculateKey extends React.Component {
    handleCalculateClick = () => {
        var result = calculateMathematicalExpression(this.props.expression)
        
        // Set Result
        this.props.setResult(result.value)

        // Set expression to result for further calculation
        if (!result.isError) {
            this.props.setExpressionString(result.value)
        }
    }

    render() {
        const { divClassStr, btnClassStr } = this.props
        return(
            <div className={divClassStr}>
                <button className={btnClassStr} type="button" onClick={this.handleCalculateClick}>=</button>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        expression: state.expression.expressionStr
    }),
    (dispatch) => bindActionCreators({ setResult, setExpressionString }, dispatch)
)(CalculateKey)