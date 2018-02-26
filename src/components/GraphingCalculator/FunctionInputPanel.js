import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setGraphingFunctionString } from '../../actions'
import ErrorMessage from './ErrorMessage'

const FunctionInputPanel = (props) => {
    return (
        <div className="rows">
            <div className="column-12">
                Enter Function
            </div>
            <div className="column-12">
                <label>f(x) = </label>
                <input
                    className="graph-function-input"
                    type="text"
                    value={props.functionStr}
                    onChange={(evt) => props.setGraphingFunctionString(evt.target.value)} />
            </div>
            <div className="column-12 padding0">
                <ErrorMessage
                    isError={props.isError}
                    errorMessage={props.errorMessage} />
            </div>
        </div>
    )
}

export default connect(
    (state) => ({
        functionStr: state.graphingCalculator.function,
        errorMessage: state.graphingCalculator.errorMessage,
        isError: state.graphingCalculator.isError
    }),
    (dispatch) => bindActionCreators({ setGraphingFunctionString }, dispatch)
)(FunctionInputPanel)