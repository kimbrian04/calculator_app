import React from 'react'
import ExpressionInput from './ExpressionInput'
import ResultDisplay from './ResultDisplay'
import RightInputPanel from './RightInputPanel/'
import LeftInputPanel from './LeftInputPanel/'

class ArithmeticCalculator extends React.Component {
    componentDidMount() {
        this.expressionRef.focus()
    }

    setExpressionRef = (el) => this.expressionRef = el

    setFocus = () => this.expressionRef.focus()

    render() {
        return (
            <div className="calculator-container container" onClick={() => this.setFocus()}>
                <div className="rows">
                    <div className="column-12 expression-container">
                        <ExpressionInput
                            expressionRef={this.setExpressionRef}/>
                    </div>
                </div>
                <div className="rows">
                    <div className="column-12 result-container">
                        <ResultDisplay />
                    </div>
                </div>
                <div className="rows">
                    <LeftInputPanel />
                    <RightInputPanel />
                </div>
            </div>
        )
    }
}

export default ArithmeticCalculator