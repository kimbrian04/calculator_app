import React from 'react'
import OperatorKey from './OperatorKey'
import CalculateKey from './CalculateKey'
import ParenthesisKey from './ParenthesisKey'
import FunctionKey from './FunctionKey'

const RightInputPanel = (props) => {
    return (
        <div className="column-4 paddingLeft0">
            <div className="rows">
                <ParenthesisKey
                    divClassStr="column-6"
                    btnClassStr="operator"
                    displayText="(" />
                <ParenthesisKey
                    divClassStr="column-6"
                    btnClassStr="operator"
                    displayText=")" />
            </div>
            <div className="rows">
                <FunctionKey
                    divClassStr="column-6"
                    btnClassStr="operator"
                    displayText="&radic;"
                    value="SQRT(" />
                <OperatorKey
                    divClassStr="column-6"
                    btnClassStr="operator"
                    displayText="^" />
            </div>
            <div className="rows">
                <OperatorKey
                    divClassStr="column-6"
                    btnClassStr="operator"
                    displayText="*" />
                <OperatorKey
                    divClassStr="column-6"
                    btnClassStr="operator"
                    displayText="/" />
            </div>
            <div className="rows">
                <OperatorKey
                    divClassStr="column-6"
                    btnClassStr="operator"
                    displayText="+" />
                <OperatorKey
                    divClassStr="column-6"
                    btnClassStr="operator"
                    displayText="-" />
            </div>
            <div className="rows">
                <CalculateKey
                    divClassStr="column-12"
                    btnClassStr="equal-sign" />
            </div>
        </div>
    )
}

export default RightInputPanel