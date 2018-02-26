import React from 'react'
import { connect } from 'react-redux'

const ResultDisplay = (props) => {
    return (
        <div>
            {props.result}
        </div>
    )
}

export default connect(
    (state) => ({
        result: state.expression.result
    })
)(ResultDisplay)