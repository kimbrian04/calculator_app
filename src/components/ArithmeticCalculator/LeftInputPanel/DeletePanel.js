import React from 'react'
import DeleteKey from './DeleteKey'

const DeletePanel = (props) => {
    return (
        <div className="column-12 padding0">
            <div className="rows">
                <div className="column-8">
                    <DeleteKey
                        displayText="&#8592;"
                        value="backspace" />
                </div>
                <div className="column-4">
                    <DeleteKey
                        displayText="C"
                        value="clear" />
                </div>
            </div>
        </div>
    )
}

export default DeletePanel