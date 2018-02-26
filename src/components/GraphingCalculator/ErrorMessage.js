import React from 'react'

const ErrorMessage = (props) => {
    return (
        props.isError && 
        <div className="rows">
            <div className="column-12">
                <div className="error-message">
                    <b>Error! </b>{props.errorMessage}
                </div>
            </div>
        </div>
    )
}

export default ErrorMessage