import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setXAxisStart, setXAxisEnd, setYAxisStart, setYAxisEnd, setDataPoint } from '../../actions'
import { generateGraphDataPoints } from '../../Util'

class AxisRangeInputPanel extends React.Component {
    handleInputChange = (type, value) => {
        var xS = this.props.xStart,
            xE = this.props.xEnd,
            yS = this.props.yStart,
            yE = this.props.yEnd

        switch(type) {
            case "xStart":
                xS = value
                this.props.setXAxisStart(value)
                break;
            case "xEnd":
                xE = value
                this.props.setXAxisEnd(value)
                break;
            case "yStart":
                yS = value
                this.props.setYAxisStart(value)
                break;
            case "yEnd":
                yE = value
                this.props.setYAxisEnd(value)
                break;
            default:
                break;
        }

        var newDataPoints = generateGraphDataPoints(this.props.functionStr, xS, xE, yS, yE)
        this.props.setDataPoint(newDataPoints)
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="column-12">
                        X-Axis Range
                    </div>
                </div>
                <div className="row">
                    <div className="column-6 padding0">
                        From
                    </div>
                    <div className="column-6 padding0">
                        To
                    </div>
                </div>
                <div className="row">
                    <div className="column-6">
                        <input 
                            type="number"
                            className="graph-function-input"
                            value={this.props.xStart}
                            onChange={(evt) => this.handleInputChange("xStart", evt.target.value)} />
                    </div>
                    <div className="column-6">
                        <input 
                            type="number"
                            className="graph-function-input"
                            value={this.props.xEnd}
                            onChange={(evt) => this.handleInputChange("xEnd", evt.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="column-12">
                        Y-Axis Range
                    </div>
                </div>
                <div className="row">
                    <div className="column-6 padding0">
                        From
                    </div>
                    <div className="column-6 padding0">
                        To
                    </div>
                </div>
                <div className="row">
                    <div className="column-6">
                        <input 
                            type="number"
                            className="graph-function-input"
                            value={this.props.yStart}
                            onChange={(evt) => this.handleInputChange("yStart", evt.target.value)} />
                    </div>
                    <div className="column-6">
                        <input 
                            type="number"
                            className="graph-function-input"
                            value={this.props.yEnd}
                            onChange={(evt) => this.handleInputChange("yEnd", evt.target.value)} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(
    (state) => ({
        xStart: state.graphingCalculator.xStart,
        xEnd: state.graphingCalculator.xEnd,
        yStart: state.graphingCalculator.yStart,
        yEnd: state.graphingCalculator.yEnd,
        functionStr: state.graphingCalculator.function
    }),
    (dispatch) => bindActionCreators({ setXAxisStart, setXAxisEnd, setYAxisStart, setYAxisEnd, setDataPoint }, dispatch)
)(AxisRangeInputPanel)