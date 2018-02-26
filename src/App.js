import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArithmeticCalculator from './components/ArithmeticCalculator'
import GraphingCalculator from './components/GraphingCalculator'
import Menu from './components/Menu'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="rows">
                    <Menu />
                </div>
                <div className="rows">
                    {
                        this.props.selectedMenu === "arith" ?
                            <ArithmeticCalculator />
                        : 
                            <GraphingCalculator />
                    }
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        selectedMenu: state.menu.selectedMenu
    })
)(App)
