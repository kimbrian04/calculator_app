import React from 'react'
import { connect } from 'react-redux'
import { LineChart } from 'react-easy-chart'

class GraphArea extends React.Component {
    render() {
        const { xStart, xEnd, yStart, yEnd, dataPoint } = this.props
        return (
            <LineChart
                axes
                margin={{top: 15, right:30, bottom: 30, left: 30}}
                grid
                verticalGrid
                interpolate={'cardinal'}
                xDomainRange={[xStart, xEnd]}
                yDomainRange={[yStart, yEnd]}
                width={400}
                height={200}
                data={[dataPoint]}
            />
        )
    }
}

export default connect(
    (state) => ({
        xStart: state.graphingCalculator.xStart,
        xEnd: state.graphingCalculator.xEnd,
        yStart: state.graphingCalculator.yStart,
        yEnd: state.graphingCalculator.yEnd,
        dataPoint: state.graphingCalculator.dataPoint
    })
)(GraphArea)