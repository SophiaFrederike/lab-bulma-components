import React, { Fragment } from 'react'

export default function FormField(props) {
    return (
        <Fragment>
            <div className='formField'>
                <label className='label'>{props.label}</label>
                <div className="inputField">
                    <input className="input" type="text" placeholder={props.placeholder} />
                </div>
            </div>

        </Fragment>
    )
}