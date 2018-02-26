import React from 'react'
import GraphArea from './GraphArea'
import FunctionInputPanel from './FunctionInputPanel'
import AxisRangeInputPanel from './AxisRangeInputPanel'
import GraphButton from './GraphButton'

class GraphingCalculator extends React.Component {
    render() {
        return (
            <div className="calculator-container container">
                <div className="rows graph-row">
                    <div className="column-12 grpah-chart">
                        <GraphArea />
                    </div>
                </div>
                
                <div className="rows">
                    <div className="column-8 graph-input-panel">
                        <FunctionInputPanel />
                    </div>
                    <div className="column-4 graph-input-panel">
                        <AxisRangeInputPanel />
                    </div>
                </div>
                <div className="rows">
                    <div className="column-4"></div>
                    <div className="column-4">
                        <GraphButton />
                    </div>
                    <div className="column-4"></div>
                </div>
            </div>
        )
    }
}

export default GraphingCalculator