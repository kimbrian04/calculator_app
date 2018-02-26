import React from 'react'
import NumberKey from './NumberKey'

const NumberKeysPanel = (props) => {
    return (
        <div className="column-12 padding0">
            <div className="rows">
                <NumberKey
                    classString="column-4"
                    displayText={7} />
                <NumberKey
                    classString="column-4"
                    displayText={8} />
                <NumberKey
                    classString="column-4"
                    displayText={9} />
            </div>
            <div className="rows">
                <NumberKey
                    classString="column-4"
                    displayText={4} />
                <NumberKey
                    classString="column-4"
                    displayText={5} />
                <NumberKey
                    classString="column-4"
                    displayText={6} />
            </div>
            <div className="rows">
                <NumberKey
                    classString="column-4"
                    displayText={1} />
                <NumberKey
                    classString="column-4"
                    displayText={2} />
                <NumberKey
                    classString="column-4"
                    displayText={3} />
            </div>
            <div className="rows">
                <NumberKey
                    classString="column-8"
                    displayText={0} />
                <NumberKey
                    classString="column-4"
                    displayText="." />
            </div>
        </div>
    )
}

export default NumberKeysPanel