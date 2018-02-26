import React from 'react'
import MenuOption from './MenuOption'

const Menu = (props) => {
    return (
        <div className="menu-div">
            <MenuOption 
                text="Arithmetic" 
                value="arith" />
            <MenuOption 
                text="Graphing" 
                value="graph" />
        </div>
    )
}

export default Menu