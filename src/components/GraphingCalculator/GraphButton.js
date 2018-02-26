import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setDataPoint, setGraphingError, setGrpahingErrorMessage } from '../../actions'
import { generateGraphDataPoints } from '../../Util'

class GraphButton extends React.Component {
    generateDataPoints = () => {
        const { functionStr, 
                xStart,
                 xEnd, 
                 yStart, 
                 yEnd, 
                 setDataPoint,
                 setGraphingError,
                 setGrpahingErrorMessage
              } = this.props

        var newDataPoints = generateGraphDataPoints(functionStr, xStart, xEnd, yStart, yEnd)
        if (newDataPoints.length === 0) {
            setGrpahingErrorMessage("Please check function format")
            setGraphingError(true)
        }
        setDataPoint(newDataPoints)
    }

    render() {
        return (
            <button
                type="button"
                className="graph-button"
                onClick={this.generateDataPoints} >

                Graph Function
            </button>
        )
    }
}

export default connect(
    (state) => ({
        functionStr: state.graphingCalculator.function,
        xStart: state.graphingCalculator.xStart,
        xEnd: state.graphingCalculator.xEnd,
        yStart: state.graphingCalculator.yStart,
        yEnd: state.graphingCalculator.yEnd,
        dataPoint: state.graphingCalculator.dataPoint
    }),
    (dispatch) => bindActionCreators({ setDataPoint, setGraphingError, setGrpahingErrorMessage }, dispatch)
)(GraphButton)