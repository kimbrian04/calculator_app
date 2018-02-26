import React from 'react'
import NumberKeysPanel from './NumberKeysPanel'
import DeletePanel from './DeletePanel'

const LeftInputPanel = (props) => {
    return (
        <div className="column-8">
            <div className="rows">
                <DeletePanel />
            </div>
            <div className="rows">
                <NumberKeysPanel
                    expressionRef={props.expressionRef} />
            </div>
        </div>
    )
}

export default LeftInputPanel